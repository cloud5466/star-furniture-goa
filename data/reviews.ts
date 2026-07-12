export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
}

export const reviews: Review[] = [
  {
    id: "atika-asif",
    name: "Atika Asif",
    location: "Goa",
    rating: 5,
    review:
      "I have no words to express mine and my kids feeling to get such stunning furniture made exactly what we wanted in terms of color and design. Simple and elegant at the same time. The owner Mr. Abrar is a wonderful gentleman and the team worked with dedication and fast delivery.",
  },
  {
    id: "caroline-ataide",
    name: "Caroline Ataide",
    location: "Goa",
    rating: 5,
    review:
      "Star Furniture did a fine job on my new wardrobe, bed, and drawers. They were very quick with delivery and installation. They patiently listened to all my requests and delivered exactly what I wanted. Highly recommend!",
  },
  {
    id: "marsha-baretto",
    name: "Marsha Baretto",
    location: "Goa",
    rating: 5,
    review:
      "We got our altar made by Star Furniture and the craftsmanship is truly outstanding. The team was professional, patient, and very accommodating to our requirements. It has become the centerpiece of our home.",
  },
  {
    id: "aditya-chari",
    name: "Aditya Chari",
    location: "Goa",
    rating: 4,
    review:
      "I recently ordered an office table for my desk setup and the team delivered exactly what I had in mind. The delivery was smooth, punctual, and hassle-free. The build quality feels sturdy and elegant.",
  },
  {
    id: "natasha-colimao",
    name: "Natasha Colimao",
    location: "Goa",
    rating: 5,
    review:
      "As a bride-to-be, I wanted every corner of my home to reflect love, care, and creativity. From my wardrobe to my dressing mirror and TV unit, everything turned out beautifully and better than I imagined.",
  },
  {
    id: "yogitaa-raut",
    name: "Yogitaa Raut",
    location: "Goa",
    rating: 5,
    review:
      "Star Furniture did an excellent job with our bed, wardrobe, and modular kitchen. The finishing is very neat, the quality of work is superb, and everything was delivered on time.",
  },
  {
    id: "siddesh-karekar",
    name: "Siddesh Karekar",
    location: "Goa",
    rating: 5,
    review:
      "Great work. Furniture installation was done as promised and delivered on time. Very reliable service. Surely recommended for all house furniture work.",
  },
  {
    id: "arme-pereira",
    name: "Arme Pereira",
    location: "Goa",
    rating: 5,
    review:
      "I recently ordered a wardrobe from Star Furniture and I am really impressed. The delivery was smooth and on time, and the wardrobe itself is excellent. Very happy with the service and the product.",
  },
  {
    id: "nadeem-sheikh",
    name: "Nadeem Sheikh",
    location: "Goa",
    rating: 5,
    review:
      "One of the best furniture stores in Goa. Reasonably priced, best quality furniture, and very good customer service. When you speak to Abrar you feel like family. Highly recommend this place.",
  },
  {
    id: "singhal-raikar",
    name: "Singhal Raikar",
    location: "Goa",
    rating: 5,
    review:
      "Loved the quality and service. They made my kitchen with a new modern look within my budget and with good quality material. Do visit Star Furniture for budget-friendly quality furniture.",
  },
  {
    id: "milda-correia",
    name: "Milda Correia",
    location: "Goa",
    rating: 5,
    review:
      "We found the service good for the office executive table we ordered. Delivery was much faster than expected. Overall, good quality product and service. Worth the amount we paid.",
  },
  {
    id: "gert-huysmans",
    name: "Gert Huysmans",
    location: "Goa",
    rating: 5,
    review: "Punctual, fine work, precise, and delivered on time as promised.",
  },
  {
    id: "richa-shirodkar",
    name: "Richa Shirodkar",
    location: "Goa",
    rating: 5,
    review:
      "Really satisfied with the customized wardrobe, dressing table, and TV unit. Finishing, color scheme, and service are top notch. Special thanks to the owner and staff.",
  },
];

export function getFeaturedReviews() {
  return reviews.filter((review) => review.rating >= 4);
}
