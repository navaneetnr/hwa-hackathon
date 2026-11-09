"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getProduct, type Product } from "@/lib/products";

export type CartLine = {
  slug: string;
  qty: number;
  color?: string;
};

export type DetailedCartLine = CartLine & {
  product: Product;
};

type StoreContextValue = {
  cart: CartLine[];
  cartLines: DetailedCartLine[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  promo: { code: string; percent: number } | null;
  applyPromo: (code: string) => boolean;
  clearPromo: () => void;
  addToCart: (
    slug: string,
    qty?: number,
    color?: string,
    options?: { openDrawer?: boolean },
  ) => void;
  updateQty: (slug: string, color: string | undefined, qty: number) => void;
  removeFromCart: (slug: string, color?: string) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toast: string | null;
  showToast: (message: string) => void;
  hydrated: boolean;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const CART_KEY = "aurel.cart.v1";
const WISH_KEY = "aurel.wishlist.v1";

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [promo, setPromo] = useState<{ code: string; percent: number } | null>(
    null,
  );
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setCart(readJSON<CartLine[]>(CART_KEY, []));
    setWishlist(readJSON<string[]>(WISH_KEY, []));
    setHydrated(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    const locked = cartOpen || searchOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen, searchOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCartOpen(false);
        setSearchOpen(false);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }, []);

  const addToCart = useCallback(
    (
      slug: string,
      qty = 1,
      color?: string,
      options?: { openDrawer?: boolean },
    ) => {
      const product = getProduct(slug);
      if (!product) return;
      const chosenColor = color ?? product.colors[0]?.name;
      setCart((current) => {
        const index = current.findIndex(
          (line) => line.slug === slug && line.color === chosenColor,
        );
        if (index >= 0) {
          const next = [...current];
          next[index] = { ...next[index], qty: next[index].qty + qty };
          return next;
        }
        return [...current, { slug, qty, color: chosenColor }];
      });
      if (options?.openDrawer) {
        setCartOpen(true);
      } else {
        showToast(`${product.name} added to bag`);
      }
    },
    [showToast],
  );

  const updateQty = useCallback(
    (slug: string, color: string | undefined, qty: number) => {
      setCart((current) =>
        current
          .map((line) =>
            line.slug === slug && line.color === color
              ? { ...line, qty: Math.max(0, qty) }
              : line,
          )
          .filter((line) => line.qty > 0),
      );
    },
    [],
  );

  const removeFromCart = useCallback((slug: string, color?: string) => {
    setCart((current) =>
      current.filter(
        (line) => !(line.slug === slug && line.color === color),
      ),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback(
    (slug: string) => {
      const product = getProduct(slug);
      setWishlist((current) => {
        const exists = current.includes(slug);
        showToast(
          exists
            ? `${product?.name ?? "Item"} removed from wishlist`
            : `${product?.name ?? "Item"} saved to wishlist`,
        );
        return exists
          ? current.filter((item) => item !== slug)
          : [...current, slug];
      });
    },
    [showToast],
  );

  const isWishlisted = useCallback(
    (slug: string) => wishlist.includes(slug),
    [wishlist],
  );

  const applyPromo = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    if (normalized === "WELCOME10") {
      setPromo({ code: normalized, percent: 10 });
      return true;
    }
    if (normalized === "AUREL15") {
      setPromo({ code: normalized, percent: 15 });
      return true;
    }
    return false;
  }, []);

  const clearPromo = useCallback(() => setPromo(null), []);

  const cartLines = useMemo<DetailedCartLine[]>(() => {
    return cart.flatMap((line) => {
      const product = getProduct(line.slug);
      return product ? [{ ...line, product }] : [];
    });
  }, [cart]);

  const cartCount = useMemo(
    () => cart.reduce((total, line) => total + line.qty, 0),
    [cart],
  );

  const subtotal = useMemo(
    () =>
      cartLines.reduce(
        (total, line) => total + line.product.price * line.qty,
        0,
      ),
    [cartLines],
  );

  const shipping = subtotal === 0 || subtotal >= 150 ? 0 : 12;
  const discount = promo ? Math.round(subtotal * (promo.percent / 100)) : 0;
  const total = Math.max(0, subtotal - discount + shipping);

  const value = useMemo<StoreContextValue>(
    () => ({
      cart,
      cartLines,
      cartCount,
      subtotal,
      shipping,
      discount,
      total,
      promo,
      applyPromo,
      clearPromo,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      wishlist,
      toggleWishlist,
      isWishlisted,
      cartOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      toast,
      showToast,
      hydrated,
    }),
    [
      cart,
      cartLines,
      cartCount,
      subtotal,
      shipping,
      discount,
      total,
      promo,
      applyPromo,
      clearPromo,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      wishlist,
      toggleWishlist,
      isWishlisted,
      cartOpen,
      searchOpen,
      toast,
      showToast,
      hydrated,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}
