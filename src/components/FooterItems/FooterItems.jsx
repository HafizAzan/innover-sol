import React, { memo } from "react";
import { H3, Paragraph } from "@/components/ui/typography";
import Link from "next/link";

function FooterItems({ data = [] }) {
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>
          <H3 className="text-purple font-semibold text-[14px] pt-6">
            {item.title}
          </H3>

          {item.subItem?.map((single, index) => (
            <Link href={single.href} key={index}>
              <Paragraph className="text-purple pt-4 font-normal text-[13px]">
                {single?.label}
              </Paragraph>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default memo(FooterItems);
