import React from "react";
import { Truck, RotateCcw, Shield, Clock } from "lucide-react";

const BenefitsBar = () => {
  const benefits = [
    { icon: Truck, text: "Free shipping all across India" },
    { icon: RotateCcw, text: "Easy returns within 7 days" },
    { icon: Shield, text: "Secure payments" },
    { icon: Clock, text: "24/7 customer support" },
  ];

  return (
    <section className="bg-[#167D7F] py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm md:text-base"
            >
              <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-[#98D7C2] " />
              <span className="text-[#DDFFE7]">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBar;
