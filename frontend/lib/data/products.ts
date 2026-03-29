import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'sage-sleep-pillow',
    slug: 'sage-sleep-pillow',
    name: 'Sage Dream Pillow',
    description:
      'A handcrafted lavender and sage sleep pillow to bring calm, softness, and restful energy to every evening.',
    price: 42,
    category: 'home',
    artisan: 'Luna Handmade',
    tags: ['wellness', 'handmade', 'organic'],
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b89?auto=format&fit=crop&w=1200&q=80',
    ],
    details: [
      'Hand stitched linen cover',
      'Lavender, chamomile and dried sage blend',
      'Slow-crafted for a premium unboxing experience',
    ],
  },
  {
    id: 'terra-wax-candles',
    slug: 'terra-wax-candles',
    name: 'Terra Soy Candle Set',
    description:
      'A set of artisan soy candles with soft earth tones and warm amber notes for a slow, mindful atmosphere.',
    price: 34,
    category: 'home',
    artisan: 'Willow Candle Co.',
    tags: ['candles', 'gifts', 'sustainable'],
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605651202774-9d41d99e57cf?auto=format&fit=crop&w=1200&q=80',
    ],
    details: [
      'Eco soy wax blend',
      'Hand poured in small batches',
      'Minimal packaging with recyclable materials',
    ],
  },
  {
    id: 'petal-journal',
    slug: 'petal-journal',
    name: 'Pressed Petal Journal',
    description:
      'A botanical journal finished with pressed wildflower details, perfect for handwritten notes and creative rituals.',
    price: 28,
    category: 'stationery',
    artisan: 'Ivy & Ink',
    tags: ['stationery', 'paper goods', 'gift'],
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    ],
    details: [
      'Deckle edge paper',
      'Soft-touch cover with floral details',
      'Ready for journaling, sketching, and memory keeping',
    ],
  },
  {
    id: 'maria-handmade-necklace',
    slug: 'maria-handmade-necklace',
    name: 'Maria Beaded Necklace',
    description:
      'A delicate beaded necklace with artisan glass beads, designed for everyday wear and thoughtful gifting.',
    price: 48,
    category: 'accessories',
    artisan: 'Maison Marie',
    tags: ['jewelry', 'accessories', 'handcrafted'],
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    ],
    details: [
      'Adjustable length with silk cord',
      'Brass clasp and artisan glass beads',
      'Comes in a cotton gift pouch',
    ],
  },
  {
    id: 'cozy-woven-throw',
    slug: 'cozy-woven-throw',
    name: 'Cozy Woven Throw',
    description:
      'A handwoven cotton throw in calming neutrals, designed for cozy nights and layered styling.',
    price: 56,
    category: 'home',
    artisan: 'Meadow Loom',
    tags: ['textiles', 'home decor', 'handmade'],
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    details: ['100% cotton weave', 'Soft fringe finish', 'Perfect for gifting or sofa styling'],
  },
  {
    id: 'coffee-table-art',
    slug: 'coffee-table-art',
    name: 'Pressed Petal Art Print',
    description:
      'A limited-run print with botanical textures and soft colors, ideal for gift-ready styling and statement decor.',
    price: 30,
    category: 'art',
    artisan: 'Hazel Studio',
    tags: ['art', 'prints', 'decor'],
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    ],
    details: [
      'Archival matte paper',
      'Limited edition print',
      'Arrives in protective kraft sleeve',
    ],
  },
];
