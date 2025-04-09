import React, { memo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { H1, H3 } from "@/components/ui/typography";

function ServiceDetailCard({ label = "", number }) {
  return (
    <Card className="bg-white2 border-white3 rounded-[16px] w-full sm:w-[48%] md:w-[30%] gap-0">
      <CardHeader>
        <H3 className="text-gray font-semibold text-[16px] sm:text-[18px]">
          {label}
        </H3>
      </CardHeader>
      <CardContent>
        <H1 className="text-blue1 font-semibold text-[24px] sm:text-[28px]">
          {number}
        </H1>
      </CardContent>
    </Card>
  );
}

export default memo(ServiceDetailCard);
