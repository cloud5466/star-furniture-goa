export interface WishlistProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
}

export const wishlistStorageKey = "star-furniture-goa:wishlist";

export function readGuestWishlist(): WishlistProduct[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedWishlist = window.localStorage.getItem(wishlistStorageKey);

  if (!storedWishlist) {
    return [];
  }

  try {
    const parsedWishlist = JSON.parse(storedWishlist);

    return Array.isArray(parsedWishlist)
      ? (parsedWishlist as WishlistProduct[])
      : [];
  } catch {
    return [];
  }
}

export function writeGuestWishlist(products: WishlistProduct[]) {
  window.localStorage.setItem(wishlistStorageKey, JSON.stringify(products));
}
