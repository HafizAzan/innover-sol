import React, { memo } from "react";
import Tag from "@/components/ui/tag";
import { H1, Paragraph } from "@/components/ui/typography";
import Image from "next/image";
import { IMAGES } from "@/utils/img.constant";

function HeroSection() {
  return (
    <section>
      <div className="flex max-md:flex-col flex-row justify-between items-center max-[940px]:pt-16 max-md:pt-6 gap-y-8">
        <main className="max-sm:pl-0 max-sm:px-2 flex flex-col gap-y-4 max-sm:items-center max-md:w-full w-[55%] pt-24 max-[940px]:pl-6 max-lg:pt-0 pl-18 max-sm:text-center">
          <Tag>Technical Pricing</Tag>

          <H1 className="max-sm:text-[35px] max-sm:leading-[40px] py-3 font-normal text-[50px] md:text-[5.3vw] leading-[55px] md:leading-[5.6vw] capitalize text-blue !tracking-[-2px] md:!tracking-[-4px]">
            Right-sized solutions
            <span className="font-bold block">for businesses</span>
            <span className="font-bold block">of all sizes</span>
          </H1>

          <Paragraph className="w-full max-md:pr-10 md:w-[70%] max-sm:text-[14px] max-sm:pr-0 text-[18px] md:text-[16px]">
            Tailored pricing that scales with your business. Get enterprise-
            <span> grade HR management at a fraction of the cost.</span>
          </Paragraph>
        </main>

        <main className="max-md:w-full w-[45%] max-[940px]:h-[350px] h-[400px] max-lg:mt-0 max-[940px]:mt-8 mt-18 relative">
          <div className="absolute left-[100px] bg-dots w-[55%] md:w-[40%] h-[55%] md:h-[40%] clip-hexagon"></div>

          <Image
            src={IMAGES.laptopImg}
            alt="laptop-img-not-found"
            className="object-contain w-full h-full z-30 relative"
          />
        </main>
      </div>
    </section>
  );
}

export default memo(HeroSection);
