import { Product } from '@/types';

export const categories = [
  { id: 1, name: "Luxury Watches" },
  { id: 2, name: "Fine Jewelry" },
  { id: 3, name: "Home Decor" },
  { id: 4, name: "Artisan Leather" },
  { id: 5, name: "Bespoke Fragrance" },
  { id: 6, name: "Signature" },
  { id: 7, name: "Travel" },
  { id: 8, name: "Living" },
  { id: 9, name: "Accessories" },
  { id: 10, name: "Gourmet" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Aurelian Ceramic Vase",
    description: "Hand-painted with 24k gold leaf accents, this timeless piece elevates any interior.",
    price: 425.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqgb05pMP9Hf3wQidC2w5AUrAdfTHnFTNk6qcB3RPXRm_8NJTPlrJ3rWZGhFhTzZkRZaa4VrptRO6NyhXu7upMCaUV2QnH38b0QNzWnbIU5ReudLXQWQIplbHypTzEG-B71x4mq3b-_5etCDnIgn6skIK7uBlKFOilL-nWnBYeaVE-yyNGZR-nDzF0K7sNW0jARgysvmH2-PoOj0lkoejNvbCPXYXbtTVudvg3qLrenVSGBgK2aiFzBsWyZwUadLOGJvT5ZGbunnA",
    category: "Home Decor"
  },
  {
    id: 2,
    name: "Precision Chronograph",
    description: "Swiss-made excellence meeting modern minimalist design for the discerning professional.",
    price: 1280.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZav9Ml92J5SqVJerZQpXk1rItJj6I-GXRC9aDQcc9m6ld4fMugLbnushDbj02f6xoGW9cI9k3NTnvLChIErhOQfX3PJVhMXOCbH71C0TaRA5GrK0m1GIZf7x9EKAidzfAqHSUz0i-uryT15TIIbyRGn1UTxTW_gLM1khv5PTEsaEvsIW6k8ttSq7EOvqbT5Jg9ItJE8zPSCB3kJOdCMDQ2B0PHWrtQ8YSe03IUAmqC8dRgwB78SoXzWxTEKGjyvOadV5cZ7e-2zU",
    category: "Luxury Watches"
  },
  {
    id: 3,
    name: "Heritage Leather Duffel",
    description: "Full-grain vegetable-tanned leather that develops a unique patina over time.",
    price: 550.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRk837ekNO2CloBuPoerAxr6yGYfmZOAtea7rekzmWcluT5uR6hvSezWXnQr62BvHxcc32ZlYJ8f2uxYzkmHWWfJBXj7C9Dq8sGjDA8Uf6K7PQ2n3DQSvBaKJ0_wkfMqdACKlH8PDm2xN0sN4hXvxkjx0ufrRN90Gf0zd34-KLLq26kfC_js558HoHK4etI_-cgh6Pd-C-IfMwGye5NMl5UqQ3qwoZiLeYnMun2hALPQCeRSBNCo--tt2IyJzO5T9cC0JFUEANy3E",
    category: "Artisan Leather"
  },
  {
    id: 4,
    name: "Nocturne Eau de Parfum",
    description: "A seductive blend of midnight jasmine, sandalwood, and rare oud.",
    price: 185.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJyK31bguSjrNpwqDcUmz1xT766xc7s6alQBBm1LavwxhKxVPMTNKhXOYH_rjf4LkS8ypabJfmIstYJOO8QhGixit6911nhaRPLzqb_0BgrHxDPR0OKAyUO-UqdsLN3iLwMWJRCeL6406NNJEJdFg28ys-e72kQu6I0I80f_2xAX3mn5r1D-nv-XRmEWoILdMXOI_JPfb0DYF4lE5u7PqXt45csjETKXlH0moWoqJFHffewjwx6rpIx7ykTqjxeaH0AW5UI1KHkHI",
    category: "Bespoke Fragrance"
  },
  {
    id: 5,
    name: "Luminaire Task Lamp",
    description: "Sleek industrial design meets warm atmospheric lighting for the home office.",
    price: 310.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq6wnBVLfQSuJ9vFngxjUpSg70AEY-kckElDVn2IiWOP046DtIE9NHX1CNjK5M6EHUVYTP_53GobVXe2Or8kxIVchRM3FIRKGfKen_K8JO1ZLufJwKBQABz6YBWrF5oh7HAOrsjQPN2sZCfDWrN7FANe2aFu-Sh11JfBE_wkaU5_i7IsROluzieU2SnT0_D_I3GHdxggqHElkifrW2dQiQAW9ylvhJdWw2lqKVwUdQZWasJHvMLu7Ue-X_Dg2BOxw8NkosXUbjqBk",
    category: "Home Decor"
  },
  {
    id: 6,
    name: "Velvet Loungers",
    description: "Embroidered silk velvet slippers handcrafted for ultimate comfort and style.",
    price: 265.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwrxOb4_4Qn4cjG7sVHk-KZK2HlJ8f-elFtsVEDMLJLrJAqOc8J6u-BZogNiXhjlbLBYfBkfCyF9SQfq4FRrQos7sbYSSZBpp0LSdBISXdCAxNScx0g4DyV-hE95HLTf-RB13MZNcCW8x2dZtRvH_OKGnSLdhJ62Ar8T1idNAvTvbjKu4SaJ0cyTyb8hBb4Q8cK0Pi7JxYFi9L2lFyRCmXyzqCzZHlWpe6YYPcQbW7ucEop6mgwDM7zM8f2rVuOamLFgo_ZWYvOBY",
    category: "Artisan Leather"
  },
  {
    id: 7,
    name: "Aurelian Timeless Piece",
    description: "Exquisite timepiece crafted with precision.",
    price: 1250.00,
    originalPrice: "$1,500.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000",
    category: "Signature",
    rating: 4.9,
    reviewCount: 128,
    badge: "new",
    featured: true
  },
  {
    id: 8,
    name: "Ethereal Bloom Essence",
    description: "Captivating fragrance that lingers.",
    price: 320.00,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000",
    category: "Fragrance",
    rating: 4.7,
    reviewCount: 89,
    badge: "trending",
    featured: true
  },
  {
    id: 9,
    name: "Nomad Heritage Set",
    description: "Premium travel set for modern explorers.",
    price: 890.00,
    originalPrice: "$1,120.00",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2000",
    category: "Travel",
    rating: 4.8,
    reviewCount: 56,
    badge: "sale",
    discount: 20,
    featured: true
  },
  {
    id: 10,
    name: "Celestial Crystal Suite",
    description: "Handcrafted crystal pieces for elegance.",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2000",
    category: "Living",
    rating: 4.6,
    reviewCount: 34,
    badge: "limited",
    featured: true
  },
  {
    id: 11,
    name: "Midnight Velvet Box",
    description: "Luxurious velvet box for precious items.",
    price: 275.00,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2000",
    category: "Accessories",
    rating: 4.5,
    reviewCount: 42,
    featured: true
  },
  {
    id: 12,
    name: "Royal Tea Collection",
    description: "Premium tea from around the world.",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000",
    category: "Gourmet",
    rating: 4.9,
    reviewCount: 73,
    featured: true
  },
];

// Derived: all products with featured === true, mapped to the shape GiftCard expects
export const featuredGifts = products
  .filter((p) => p.featured)
  .map((p) => ({
    id: p.id,
    image: p.image,
    title: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    category: p.category,
    description: p.description,
    rating: p.rating,
    reviewCount: p.reviewCount,
    badge: p.badge,
    discount: p.discount,
  }));

export const mockProductsData = products.reduce((acc, curr) => {
  acc[curr.id] = {
    id: curr.id,
    name: curr.name,
    category: curr.category,
    price: curr.price,
    description: curr.description,
    fullDescription: "Immerse yourself in unparalleled luxury. This unique item is a masterclass in curated luxury designed for those who appreciate true artisan craftsmanship.",
    images: {
      thumbnails: [
        curr.image,
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000",
        "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2000"
      ]
    },
    relatedProducts: products.filter(p => p.id !== curr.id).slice(0, 3).map(p => ({
      id: p.id,
      name: p.name,
      series: p.category,
      price: p.price,
      image: p.image
    }))
  };
  return acc;
}, {} as Record<number, any>);
