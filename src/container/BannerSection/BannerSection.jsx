import React, { memo } from "react";
import { H1, Paragraph } from "@/components/ui/typography";
import Image from "next/image";
import { IMAGES } from "@/utils/img.constant";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function BannerSection() {
  return (
    <section className=" bg-blue1 mx-6 rounded-[24px] max-[940px]:h-auto h-[400px]">
      <div className="max-[940px]:pl-0 max-[940px]:pt-10 pl-14 flex items-center justify-between relative overflow-hidden h-full max-[940px]:flex-col flex-row gap-y-10">
        <div className="absolute bg-dots w-[70%] md:w-[60%] h-[70%] md:h-[60%] -top-[20px] -left-[175px] clip-hexagon !opacity-[0.4]"></div>

        <main className="w-[40vw] max-[940px]:w-full max-[940px]:text-center max-[940px]:px-4">
          <H1 className="max-sm:text-[30px] max-sm:leading-[40px] max-md:text-[45px] max-lg:text-[4vw] text-[4vw] leading-[4vw] font-normal text-white max-lg:leading-[4vw] max-md:leading-[55px]">
            Ready to transform
            <span className="font-semibold block"> Your HR Function?</span>
          </H1>

          <Paragraph className="text-white font-normal tracking-none pt-3">
            Join thousands of businesses that have streamlined their HR
            <span className="block">operations with Amplify HRM</span>
          </Paragraph>

          <div className="flex items-center max-[940px]:justify-center gap-x-4 pt-6">
            <Button className="bg-white hover:border hover:border-white text-black hover:bg-transparent hover:text-white">
              Get Started
            </Button>
            <Button className="hover:bg-white border border-white text-white hover:text-black bg-transparent">
              Schedule a Demo
            </Button>
          </div>
        </main>

        <main className="w-{60%} max-[940px]:w-full h-full overflow-hidden flex justify-end relative">
          <div className="max-sm:hidden absolute bg-dots w-[30%] h-[85%] bottom-[42%] left-[60%] -translate-x-1/2 translate-y-1/2 !opacity-[0.4]"></div>
          <Hexacon className="-right-[70px] -top-[225px]" />

          <Image
            src={IMAGES.peopleImg}
            alt="img-not-found"
            className="relative z-30 object-cover w-full h-full rounded-[24px]"
          />

          <Hexacon className="-bottom-[205px] left-[5px]" />
        </main>
      </div>
    </section>
  );
}

export default memo(BannerSection);

const Hexacon = ({ className = "" }) => (
  <div
    className={cn(
      "clip-hexagon absolute max-sm:hidden  border-2 bg-white/5 border-[#607ee5] w-[430px] h-[430px] rotate-[240deg] flex items-center justify-center",
      className
    )}
  >
    <div className="clip-hexagon bg-white/10 w-[400px] h-[400px] flex items-center justify-center">
      <div className="clip-hexagon bg-white/20 w-[350px] h-[350px]"></div>
    </div>
  </div>
);
