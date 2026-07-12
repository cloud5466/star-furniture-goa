export const contact = {
  phoneNumbers: ["8380895466", "7219883123"],
  whatsappNumber: "8380895466",
  email: {
    label: "starfurnituregoa@gmail.com",
    href: "mailto:starfurnituregoa@gmail.com",
  },
  instagram: {
    label: "@star_furniture_goa",
    href: "https://instagram.com/star_furniture_goa",
  },
  website: {
    label: "starfurnituregoa.com",
    href: "https://starfurnituregoa.com",
  },
  address: {
    line1: "Behind Apollo tiles & Pavers",
    line2: "Kirbhat Nuvem Salcete",
    region: "Goa 403601",
    href: "https://maps.app.goo.gl/wE57FuAJSdDiHqr38",
  },
  businessHours: {
    days: "Monday to Saturday",
    hours: "9:30 AM - 7:00 PM",
    note: "Call before visiting for the best consultation experience.",
  },
  googleMaps: {
    directionsHref: "https://maps.app.goo.gl/wE57FuAJSdDiHqr38",
    embedSrc:
      "https://www.google.com/maps?q=Star%20Furniture%20Goa%20Behind%20Apollo%20tiles%20and%20Pavers%20Kirbhat%20Nuvem%20Salcete%20Goa%20403601&output=embed",
  },
  whatsappHref:
    "https://wa.me/918380895466?text=Hello%20Star%20Furniture%20Goa%2C%20I%20would%20like%20to%20enquire%20about%20custom%20furniture.",
  contactPage: {
    header: {
      title: "Contact Us",
      description:
        "Visit our factory, call the team, or start a custom furniture conversation with Star Furniture Goa. We are here to help you plan furniture that fits your home, office, or commercial space.",
    },
    cards: {
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      addressLabel: "Factory Address",
    },
    map: {
      title: "Visit Our Factory",
      description:
        "Come by to discuss your furniture requirements, compare finishes, and understand what can be custom-made for your space.",
      buttonLabel: "Open in Google Maps",
    },
    businessHours: {
      title: "Business Hours",
    },
    visitReasons: {
      kicker: "Why Visit Us?",
      title: "A better way to plan custom furniture.",
      reasons: [
        {
          title: "See furniture in person",
          description:
            "Understand proportions, finish quality, and build details before finalizing a design.",
        },
        {
          title: "Compare finishes",
          description:
            "Review material and finish directions with the team before choosing your look.",
        },
        {
          title: "Discuss custom projects",
          description:
            "Talk through measurements, storage needs, layouts, and practical site details.",
        },
        {
          title: "Meet our team",
          description:
            "Work directly with the people who understand the furniture-making process.",
        },
      ],
    },
    cta: {
      title: "Need custom furniture?",
      buttonLabel: "Start Your Project",
      href: "/design-your-space",
    },
  },
} as const;
