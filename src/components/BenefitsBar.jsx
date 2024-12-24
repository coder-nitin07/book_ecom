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
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm md:text-base"
            >
              <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
              <span className="text-gray-800">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBar;
