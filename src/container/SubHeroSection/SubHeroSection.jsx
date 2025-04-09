import React, { memo } from "react";
import { Paragraph } from "@/components/ui/typography";
import { IMAGES } from "@/utils/img.constant";
import ImageStrip from "@/components/ui/imageStrip";
import ValueProposition from "@/components/ValueProposition/ValueProposition";

function SubHeroSection() {
  const { superImg, aegisImg, impactImg, ningaImg, bloomImg } = IMAGES;

  return (
    <section className="container pt-24">
      <Paragraph className="!text-gray font-normal text-center pb-6">
        Trusted by industry leaders
      </Paragraph>

      <ImageStrip
        images={[superImg, aegisImg, impactImg, ningaImg, bloomImg]}
      />
    </section>
  );
}

export default memo(SubHeroSection);
