import React from "react";
import { cn } from "@/lib/utils";

export const UL = ({ className = "", children }) => (
  <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
    {children}
  </ul>
);

export const OL = ({ className = "", children }) => (
  <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}>
    {children}
  </ol>
);

export const LI = ({ className = "", children }) => (
  <li className={cn("font-normal text-blue list-none !mt-0", className)}>
    {children}
  </li>
);
