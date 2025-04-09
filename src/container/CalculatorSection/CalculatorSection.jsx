import React, { memo } from "react";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
import CalculatorIntroCard from "@/components/CalculatorIntroCard/CalculatorIntroCard";
import { calculatorItems } from "@/utils/constant";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";

function CalculatorSection() {
  return (
    <section className="calculator-bg-img overflow-hidden relative z-[20] bg-purple border border-white3 rounded-[32px] mt-6 mx-4 pb-24">
      <div className="container px-0">
        <main className="pt-20 pb-5">
          <ValueProposition
            tag="Calculator"
            title="Calculate your ROI"
            paragraph="See how much you can save with Amplify HRM"
            isBtn={false}
            isDark={true}
          />
        </main>

        <main className="flex items-center justify-start lg:justify-center gap-x-5 flex-wrap pl-4">
          {calculatorItems?.map((item, index) => (
            <CalculatorIntroCard key={index} {...item} />
          ))}
        </main>

        <main className="max-w-full sm:max-w-[700px] lg:max-w-[855px] mx-auto mt-8">
          <EmployeeCard />
        </main>
      </div>
    </section>
  );
}

export default memo(CalculatorSection);
