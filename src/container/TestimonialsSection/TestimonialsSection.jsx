import React, { memo } from "react";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import { testimonialItems } from "@/utils/constant";

function TestimonialsSection() {
  return (
    <section className="bg-white2 border border-white3 rounded-[32px] mt-10 mx-4 pt-14 pb-20 overflow-hidden relative">
      <div className="container">
        <main>
          <ValueProposition
            tag="Testimonials"
            title="What our clients say"
            isBtn={false}
            isDark={false}
          />
        </main>

        <main className="flex items-start justify-between flex-wrap gap-y-6 mt-10">
          {testimonialItems?.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </main>

        <div className="absolute bottom-[75px] left-0 right-0 h-[35%] bg-gradient-to-t from-white to-transparent z-0"></div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
