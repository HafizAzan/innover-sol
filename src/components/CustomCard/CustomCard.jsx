import React, { memo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { H3, Paragraph } from "@/components/ui/typography";

function CustomCard({ img = "", title = "", paragraph = "" }) {
  return (
    <Card className="shadow-none border-none max-sm:items-center">
      <CardHeader className="max-md:w-full max-sm:items-center max-sm:justify-center">
        <Image
          src={img}
          alt={`img-${title}`}
          className="w-[60px] h-[60px]"
          // layout="responsive"
        />
      </CardHeader>
      <CardContent>
        <H3 className="mb-2 max-sm:text-center max-lg:text-xl">{title}</H3>
        <Paragraph className="max-sm:text-center max-lg:text-sm">
          {paragraph}
        </Paragraph>
      </CardContent>
    </Card>
  );
}

export default memo(CustomCard);
