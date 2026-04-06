"use client";

import { useState } from "react";

interface ShippingFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function ShippingForm({ onSubmit }: ShippingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-[#ffffff] p-8 md:p-12 rounded-xl shadow-[0_64px_64px_-12px_rgba(27,29,14,0.04)]">
      <h2 className="font-['Noto_Serif'] text-3xl text-[#1b1d0e] mb-10">
        Shipping Details
      </h2>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
      >
        <div className="flex flex-col gap-2">
          <label className="font-['Inter'] text-xs uppercase tracking-widest text-[#4d4635]">
            Full Name
          </label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border-b-2 border-[#d0c5af] bg-transparent py-2 focus:border-[#735c00] focus:ring-0 transition-all outline-none"
            placeholder="Diana Prince"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-['Inter'] text-xs uppercase tracking-widest text-[#4d4635]">
            Phone Number
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border-b-2 border-[#d0c5af] bg-transparent py-2 focus:border-[#735c00] focus:ring-0 transition-all outline-none"
            placeholder="+1 (555) 000-0000"
            type="tel"
            required
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="font-['Inter'] text-xs uppercase tracking-widest text-[#4d4635]">
            Delivery Address
          </label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border-b-2 border-[#d0c5af] bg-transparent py-2 focus:border-[#735c00] focus:ring-0 transition-all outline-none"
            placeholder="123 Luxury Lane, Beverly Hills, CA"
            type="text"
            required
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="font-['Inter'] text-xs uppercase tracking-widest text-[#4d4635]">
            Personal Note (Optional)
          </label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="border-b-2 border-[#d0c5af] bg-transparent py-2 focus:border-[#735c00] focus:ring-0 transition-all outline-none resize-none"
            placeholder="Add a special message for the recipient..."
            rows={3}
          />
        </div>
      </form>
    </section>
  );
}
