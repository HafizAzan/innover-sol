"use client";

import React, { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H3, Paragraph } from "@/components/ui/typography";

function CustomFaqAccordion({ data = [] }) {
  return (
    <Accordion type="single" collapsible defaultValue={data?.[0]?.value}>
      {data?.map(({ value, question, answer }, idx) => (
        <AccordionItem
          value={value}
          key={idx}
          className="border border-white3 rounded-[24px] max-sm:px-5 max-sm:py-0 px-10 py-2 mb-4 !underline-none"
        >
          <AccordionTrigger className="underline-none [&>svg]:h-6 [&>svg]:w-6">
            <H3 className="text-lg font-semibold max-sm:text-[14px]">
              {question}
            </H3>
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph className="max-sm:text-[12px]">{answer}</Paragraph>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default memo(CustomFaqAccordion);
