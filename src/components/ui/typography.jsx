import React from "react";
import { cn } from "@/lib/utils";

const Typography = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const H1 = ({ children, className = "" }) => (
  <Typography className={cn(`text-4xl font-bold`, className)}>
    {children}
  </Typography>
);

export const H2 = ({ children, className = "" }) => (
  <Typography className={cn(`text-3xl font-semibold`, className)}>
    {children}
  </Typography>
);

export const H3 = ({ children, className = "" }) => (
  <Typography className={cn(`text-2xl font-medium`, className)}>
    {children}
  </Typography>
);

export const Paragraph = ({ children, className = "" }) => (
  <Typography className={cn(`text-[16px] text-gray font-normal`, className)}>
    {children}
  </Typography>
);

export const SmallText = ({ children, className = "" }) => (
  <Typography className={cn(`text-sm`, className)}>{children}</Typography>
);
