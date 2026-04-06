const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Aurelian Ceramic Vase",
      description: "Hand-painted with 24k gold leaf accents, this timeless piece elevates any interior.",
      price: 425.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqgb05pMP9Hf3wQidC2w5AUrAdfTHnFTNk6qcB3RPXRm_8NJTPlrJ3rWZGhFhTzZkRZaa4VrptRO6NyhXu7upMCaUV2QnH38b0QNzWnbIU5ReudLXQWQIplbHypTzEG-B71x4mq3b-_5etCDnIgn6skIK7uBlKFOilL-nWnBYeaVE-yyNGZR-nDzF0K7sNW0jARgysvmH2-PoOj0lkoejNvbCPXYXbtTVudvg3qLrenVSGBgK2aiFzBsWyZwUadLOGJvT5ZGbunnA",
      category: "Occasions",
      featured: true,
      rating: 4.8
    },
    {
      name: "Precision Chronograph",
      description: "Swiss-made excellence meeting modern minimalist design for the discerning professional.",
      price: 1280.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZav9Ml92J5SqVJerZQpXk1rItJj6I-GXRC9aDQcc9m6ld4fMugLbnushDbj02f6xoGW9cI9k3NTnvLChIErhOQfX3PJVhMXOCbH71C0TaRA5GrK0m1GIZf7x9EKAidzfAqHSUz0i-uryT15TIIbyRGn1UTxTW_gLM1khv5PTEsaEvsIW6k8ttSq7EOvqbT5Jg9ItJE8zPSCB3kJOdCMDQ2B0PHWrtQ8YSe03IUAmqC8dRgwB78SoXzWxTEKGjyvOadV5cZ7e-2zU",
      category: "Occasions",
      featured: true,
      rating: 4.9
    },
    {
      name: "Heritage Leather Duffel",
      description: "Full-grain vegetable-tanned leather that develops a unique patina over time.",
      price: 550.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRk837ekNO2CloBuPoerAxr6yGYfmZOAtea7rekzmWcluT5uR6hvSezWXnQr62BvHxcc32ZlYJ8f2uxYzkmHWWfJBXj7C9Dq8sGjDA8Uf6K7PQ2n3DQSvBaKJ0_wkfMqdACKlH8PDm2xN0sN4hXvxkjx0ufrRN90Gf0zd34-KLLq26kfC_js558HoHK4etI_-cgh6Pd-C-IfMwGye5NMl5UqQ3qwoZiLeYnMun2hALPQCeRSBNCo--tt2IyJzO5T9cC0JFUEANy3E",
      category: "Sports",
      featured: true,
      rating: 4.7
    },
    {
      name: "Nocturne Eau de Parfum",
      description: "A seductive blend of midnight jasmine, sandalwood, and rare oud.",
      price: 185.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJyK31bguSjrNpwqDcUmz1xT766xc7s6alQBBm1LavwxhKxVPMTNKhXOYH_rjf4LkS8ypabJfmIstYJOO8QhGixit6911nhaRPLzqb_0BgrHxDPR0OKAyUO-UqdsLN3iLwMWJRCeL6406NNJEJdFg28ys-e72kQu6I0I80f_2xAX3mn5r1D-nv-XRmEWoILdMXOI_JPfb0DYF4lE5u7PqXt45csjETKXlH0moWoqJFHffewjwx6rpIx7ykTqjxeaH0AW5UI1KHkHI",
      category: "Spiritual",
      featured: true,
      rating: 4.6
    },
    {
      name: "Luminaire Task Lamp",
      description: "Sleek industrial design meets warm atmospheric lighting for the home office.",
      price: 310.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq6wnBVLfQSuJ9vFngxjUpSg70AEY-kckElDVn2IiWOP046DtIE9NHX1CNjK5M6EHUVYTP_53GobVXe2Or8kxIVchRM3FIRKGfKen_K8JO1ZLufJwKBQABz6YBWrF5oh7HAOrsjQPN2sZCfDWrN7FANe2aFu-Sh11JfBE_wkaU5_i7IsROluzieU2SnT0_D_I3GHdxggqHElkifrW2dQiQAW9ylvhJdWw2lqKVwUdQZWasJHvMLu7Ue-X_Dg2BOxw8NkosXUbjqBk",
      category: "Books",
      featured: false,
      rating: 4.5
    },
    {
      name: "Velvet Loungers",
      description: "Embroidered silk velvet slippers handcrafted for ultimate comfort and style.",
      price: 265.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwrxOb4_4Qn4cjG7sVHk-KZK2HlJ8f-elFtsVEDMLJLrJAqOc8J6u-BZogNiXhjlbLBYfBkfCyF9SQfq4FRrQos7sbYSSZBpp0LSdBISXdCAxNScx0g4DyV-hE95HLTf-RB13MZNcCW8x2dZtRvH_OKGnSLdhJ62Ar8T1idNAvTvbjKu4SaJ0cyTyb8hBb4Q8cK0Pi7JxYFi9L2lFyRCmXyzqCzZHlWpe6YYPcQbW7ucEop6mgwDM7zM8f2rVuOamLFgo_ZWYvOBY",
      category: "Holidays",
      featured: false,
      rating: 4.7
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
