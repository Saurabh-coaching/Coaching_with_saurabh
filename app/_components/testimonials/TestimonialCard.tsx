import React from "react";
import Image from "next/image";
import { Testimonial } from "@/types";
import { BsQuote } from "react-icons/bs";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-black p-8 rounded-lg border border-[#9C9C9C] flex flex-col justify-between relative w-full h-full space-y-4">
      <BsQuote className="h-10 w-10 text-white absolute -inset-4 left-2" />

      {/* Scrollable testimonial text */}
      <div className="text-gray-300 text-lg leading-relaxed text-left font-mono overflow-y-auto  scrollbar-thumb-gray-500 scrollbar-track-gray-700" style={{ maxHeight: "150px", width: "100%" }}>
        {testimonial.text}
      </div>

      {/* Client info */}
      <div className="flex items-center space-x-4">
        <Image
          src={testimonial.clientImage}
          alt={testimonial.clientName}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold text-white font-sans">
          {testimonial.clientName}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
