import React, { memo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H3, Paragraph } from "@/components/ui/typography";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

function CalculatorIntroCard({ title = "", paragraph = "", span = "" }) {
  return (
    <Card className="bg-transparent border-none shadow-none gap-0 text-center w-full sm:w-[48%] md:w-[30%] lg:w-[20%]">
      <CardHeader className="px-0">
        <H3
          className={cn(
            "text-white text-[25px] lg:text-[40px] font-semibold tracking-[-4%]",
            inter.className
          )}
        >
          {title}
          <span className="font-light lg:text-[30px] text-[20px]">{span}</span>
        </H3>
      </CardHeader>
      <CardContent className="px-0">
        <Paragraph className="text-white4">{paragraph}</Paragraph>
      </CardContent>
    </Card>
  );
}

export default memo(CalculatorIntroCard);
