"use client";

import React, { memo, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { H3, Paragraph } from "@/components/ui/typography";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { serviceDetailInfo } from "@/utils/constant";
import ServiceDetailCard from "@/components/ServiceDetailCard/ServiceDetailCard";

function EmployeeCard() {
  const [value, setValue] = useState([250]);

  return (
    <Card>
      <CardHeader>
        <H3 className="font-normal text-[18px] sm:text-[20px] md:text-[24px]">
          Number of Employees: <span className="font-bold">{value}</span>
        </H3>
      </CardHeader>
      <CardContent>
        <Slider
          min={5}
          max={500}
          value={value}
          onValueChange={setValue}
          className="w-full"
        />
        <div className="flex items-center justify-between pt-4">
          <Paragraph className="text-sm sm:text-[12px]">5</Paragraph>
          <Paragraph className="text-sm sm:text-[12px]">500+</Paragraph>
        </div>

        <div className="flex items-center flex-wrap justify-between pt-6 gap-4">
          {serviceDetailInfo?.map((item, index) => (
            <ServiceDetailCard key={index} {...item} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center pt-4">
        <Button className="hover:bg-blue2 text-white bg-blue1 px-6 py-2 sm:px-4 sm:py-1">
          Get a personalized quote
        </Button>
      </CardFooter>
    </Card>
  );
}

export default memo(EmployeeCard);
