"use client";

import Image from "next/image";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-[#f5f5dc] p-6 rounded-xl transition-all hover:bg-[#efefd7]">
      <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden bg-[#eaead1] relative">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-grow space-y-2">
        <h3 className="font-['Noto_Serif'] text-xl text-[#1b1d0e]">
          {item.name}
        </h3>
        <p className="text-[#4d4635] text-sm">{item.description}</p>
        <span className="font-['Noto_Serif'] text-lg text-[#735c00]">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center bg-[#e4e4cc] rounded-full px-4 py-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="hover:text-[#735c00] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">remove</span>
          </button>
          <span className="mx-4 font-medium w-6 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="hover:text-[#735c00] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-[#4d4635] hover:text-[#ba1a1a] transition-colors p-2"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
