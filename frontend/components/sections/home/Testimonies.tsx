"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Eleanor Vance",
      text: "The attention to detail in the packaging alone was breathtaking. Diana helped me find a 50th-anniversary gift that brought my parents to tears. Simply exceptional.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBM15LVXjX1upjESQCFDappaYHnj4Mnd7QrDxX65R-kz0TT65pTdlO6nKgRRh16zqwzM3JgMuAV_gQ4PyaontzX-H-t9e9AFeOs7Qd-ku4q4se6U15jnwD8tkNYwgkqThdQhQ-LgzEI7b_82eMt-6cWtHWSKTd0J0wj3obkUIdRLo7ix7OK2R6TwF3x6rJTGDsfH-0BbaY7-r8kv8rD72OkSTd7hjq1q8AJ4uZz-kYccliHJN1rpzYzVFd5S6l88r_XOb1rukhvh4s",
    },
    {
      id: 2,
      name: "Jameson Blake",
      text: "I'm usually terrible at buying gifts. Diana's store made me look like a pro. The curated selection means you can't really go wrong. Highly recommend the personalized leather goods.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvYikz5egcVs2DnpBQLp-M8DahThbdoO6_cwKavldUbQxLsWKWu2k8YFubDYsIhO1AgGWr5DVIXOPUE7xHZHE7iJEPcZCS088RDQFCrqasZqRFQHnZIhuMd46NfGoh4cwIh9wpWamooxlNE4b5tDKjuWsGa03MYAeY1cxqzruP0bhGhZSq5Oe70RRcZZCOwOr8peFoz6hohXEtI36PGK4qAZHyAZjnNZvoaeFku0nCNzuJeFi1YVaZt2soeitDpQ1hUqCv1mg9MU",
    },
    {
      id: 3,
      name: "Sophia Chen",
      text: "Elegant, timeless, and surprisingly personal. It feels like shopping in a private boutique in Paris. The gift concierge service is a game-changer for busy people.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCiJbWqY87K4PPZuDEL5rVu00X7tDbuDJucfMmKBy_jIB_A3NqMUIXWjxYSDap8yInkUBzX_PWzJ0pEATEJQ-89lGAPwH2VAYbNyvVGupU8RS50MaHmjNbIBPCMtty3R_407lWwZHs0NC5K6EzQ-MZMMU4Wn2R7DIxtWGQrNfF_kIDBNR2Frzjw8rDo2AjXEfo-nYO4PbA7kDZRCF99k_s1XcB1O5VFFseegdSzDppaOeEK9CpWQGTVuGQGbKzCgXIhMa2ayAW_9mQ",
    },
  ];

  return (
    <section className="py-24 bg-[#FBFBE2]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline text-[#1B1D0E] italic">
            Kind Words from Clients
          </h2>
          <p className="text-[#4d4635] font-body mt-4">
            Join our community of thoughtful givers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-10 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow border border-[#d0c5af]/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B1D0E]">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" stroke="#D4AF37" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#4d4635] font-body italic leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
