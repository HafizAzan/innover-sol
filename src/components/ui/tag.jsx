import React, { memo } from "react";
import { Paragraph } from "./typography";
import { cn } from "@/lib/utils";

function Tag({ children, className = "" }) {
  return (
    <span
      className={cn(
        "text-green bg-white1 rounded-[40px] w-[150px] text-[14px] text-center py-2",
        className
      )}
    >
      {children}
    </span>
  );
}

export default memo(Tag);
