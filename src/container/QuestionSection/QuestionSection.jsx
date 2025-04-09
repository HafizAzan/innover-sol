import React, { memo } from "react";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
import CustomFaqAccordion from "@/components/CustomFaqAccordion/CustomFaqAccordion";
import { questionsAccordion } from "@/utils/constant";

function QuestionSection() {
  return (
    <section className="mt-20 pb-18">
      <div className="max-lg:!mx-10 mx-10 ml-20 flex justify-between flex-wrap">
        <main className="w-1/2 max-lg:w-full">
          <ValueProposition
            isLeft
            tag="FAQ"
            title="Frequently Asked Questions"
            paragraph="Everything you need to know about our pricing and services"
          />
        </main>
        <main className="w-1/2 max-lg:w-full flex flex-col gap-y-4">
          <CustomFaqAccordion data={questionsAccordion} />
        </main>
      </div>
    </section>
  );
}

export default memo(QuestionSection);
