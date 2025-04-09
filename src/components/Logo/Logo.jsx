import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { H3 } from "@/components/ui/typography";
import { SVG_ICONS } from "@/utils/svg.constant";

function Logo() {
  return (
    <Link className="flex items-center gap-x-2" href="/">
      <Image src={SVG_ICONS.logoIcon} alt="amiplify-logo-not-found" />
      <H3 className="font-semibold text-lg text-purple">AMPLIFY</H3>
    </Link>
  );
}

export default memo(Logo);
