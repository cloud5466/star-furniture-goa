export const designFurnitureCategories = [
  "Wardrobes",
  "TV Units",
  "Beds",
  "Dining",
  "Office Furniture",
  "Modular Kitchens",
  "Custom Furniture",
] as const;

export type DesignFurnitureCategory = (typeof designFurnitureCategories)[number];

export const designYourSpaceContent = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Design Your Space" },
  ],
  header: {
    title: "Let's Design Your Space",
    description:
      "Share your furniture ideas, room details, inspiration images, and preferred finishes. Our team will review your requirements and help plan custom-made furniture for your space.",
  },
  furnitureSelector: {
    kicker: "Choose Your Furniture",
    title: "What would you like us to design?",
    label: "Furniture category",
  },
  inspiration: {
    kicker: "Share Your Inspiration",
    imageTitle: "Upload Images",
    imageNote:
      "Images aren't automatically sent through WhatsApp. After WhatsApp opens, you can attach them before sending.",
    pinterestTitle: "Pinterest Link (Optional)",
    pinterestPlaceholder: "https://www.pinterest.com/pin/...",
  },
  dimensions: {
    kicker: "Tell Us About Your Space",
    helperText:
      "Room dimensions are optional. Add whatever you know now, and we can confirm exact measurements later.",
  },
  requirements: {
    kicker: "Tell Us Your Ideas",
    placeholder:
      "Describe your ideas, preferred materials, finishes, storage needs and any additional information.",
  },
  contact: {
    kicker: "Contact Details",
  },
  cta: {
    label: "Start My Project",
  },
  timeline: {
    kicker: "What Happens Next?",
    title: "A simple process from idea to custom furniture.",
    steps: [
      {
        title: "We receive your enquiry.",
        description:
          "Your WhatsApp message gives us the starting point for the project.",
      },
      {
        title: "We review your requirements.",
        description:
          "We look at your category, ideas, room details, and inspiration references.",
      },
      {
        title: "We contact you.",
        description:
          "Our team follows up to clarify details, timings, and next steps.",
      },
      {
        title: "We design furniture tailored to your space.",
        description:
          "Your furniture plan is shaped around your room, preferences, and daily use.",
      },
    ],
  },
} as const;

