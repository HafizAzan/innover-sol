import React, { memo } from "react";
import { Paragraph } from "@/components/ui/typography";
import Link from "next/link";
import { footerItems } from "@/utils/constant";

function Footer() {
  return (
    <footer className="container flex items-center justify-between max-md:flex-col gap-y-4">
      <Paragraph className="text-[14px]">
        &copy; {new Date().getFullYear()} Amplify. All rights reserved.
      </Paragraph>

      <main className="flex items-center gap-x-4">
        {footerItems?.map((item, index) => (
          <Link key={index} href={item.href}>
            <Paragraph className="text-[14px]">{item.label}</Paragraph>
          </Link>
        ))}
      </main>
    </footer>
  );
}

export default memo(Footer);
