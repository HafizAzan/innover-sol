import React, { memo } from "react";
import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import { H1, Paragraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

function ValueProposition({
  tag = "",
  paragraph = "",
  title = "",
  isBtn = false,
  isDark = false,
  isLeft = false,
}) {
  return (
    <main
      className={cn("text-center", {
        "text-left max-lg:text-center max-lg:mb-10": isLeft,
      })}
    >
      <Tag className={cn("px-4")}>{tag}</Tag>

      <H1
        className={cn("my-4 font-semibold leading-[50px]", {
          "text-white": isDark,
          "text-[32px] max-sm:text-[28px] max-md:text-[36px] max-lg:text-[40px] max-xl:text-[48px]": true,
        })}
      >
        {title}
      </H1>

      {paragraph && (
        <Paragraph
          className={cn("max-sm:text-[12px] max-md:text-[14px]", {
            "text-white4 mb-7": isDark,
          })}
        >
          {paragraph}
        </Paragraph>
      )}

      {isDark && (
        <hr className="border-t border-white/10 h-[1px] w-[75%] mx-auto" />
      )}

      {isBtn && (
        <Button className="hover:bg-blue2 text-white bg-blue1 mt-4 px-4 py-1">
          Schedule a consultation
        </Button>
      )}
    </main>
  );
}

export default memo(ValueProposition);
