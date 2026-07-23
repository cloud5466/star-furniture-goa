export const routes = {
  home: "/",
  about: "/#about-star-furniture",
  collections: "/collections",
  catalogues: "/catalogues",
  contact: "/contact",
  wishlist: "/wishlist",
  designYourSpace: "/design-your-space",
} as const;

export const primaryNavigation = [
  { label: "Home", href: routes.home },
  { label: "Our Collections", href: routes.collections },
  { label: "Catalogues", href: routes.catalogues },
  { label: "Contact", href: routes.contact },
] as const;

export const footerNavigation = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  { label: "Our Collections", href: routes.collections },
  { label: "Catalogues", href: routes.catalogues },
  { label: "Design Your Space", href: routes.designYourSpace },
  { label: "Contact", href: routes.contact },
  { label: "Wishlist", href: routes.wishlist },
] as const;
