import React, { memo } from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { H3, Paragraph } from "@/components/ui/typography";
import Image from "next/image";

function TestimonialCard({ img, name, destination, paragraph }) {
  return (
    <Card className="w-[32%] max-sm:w-[100%] max-md:w-[48%] shadow-none border-none">
      <CardHeader className="flex items-center gap-x-5">
        <Image src={img} width={50} height={50} alt="not-found-img" />
        <main>
          <H3 className="text-[14px] font-semibold text-purple">{name}</H3>
          <Paragraph className="text-[14px] font-normal text-gray">
            {destination}
          </Paragraph>
        </main>
      </CardHeader>
      <CardDescription className="px-6">
        <H3 className="text-purple font-normal text-[14px]">{paragraph}</H3>
      </CardDescription>
    </Card>
  );
}

export default memo(TestimonialCard);
