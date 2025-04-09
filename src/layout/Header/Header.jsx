"use client";
import React, { memo } from "react";
import { H3, SmallText } from "@/components/ui/typography";
import { LI, UL } from "@/components/ui/list";
import Link from "next/link";
import { headerNavItems } from "@/utils/constant";
import { Button } from "@/components/ui/button";
import { AlignJustify, Phone } from "lucide-react";
import Logo from "@/components/Logo/Logo";
import CustomDrawer from "@/components/CustomDrawer/CustomDrawer";
import { useRouter } from "next/navigation";

function Header() {
  return (
    <header className="bg-white px-5 max-md:px-6 max-sm:px-3 py-3 max-sm:py-2 flex items-center justify-between h-[70px] max-sm:h-[60px] sticky top-0 z-50">
      <main className="flex items-center gap-x-6 max-md:gap-x-4 max-sm:gap-x-2">
        <Logo />

        <UL className="flex items-center gap-x-6 max-[940px]:hidden my-0">
          {headerNavItems?.map((single, index) => (
            <LI key={index}>
              <Link
                href={single?.href}
                className="text-[15px] max-sm:text-[13px]"
              >
                {single?.name}
              </Link>
            </LI>
          ))}
        </UL>
      </main>

      <main className="flex items-center gap-x-4 max-sm:gap-x-2 max-sm:justify-end">
        <div className="flex items-center gap-x-3 max-sm:gap-x-1">
          <Phone className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <div>
            <SmallText className="text-gray text-[14px] max-sm:text-[12px]">
              Contact Us
            </SmallText>
            <Link href="tel:+224-424-5400">
              <H3 className="text-purple text-[15px] font-semibold max-sm:text-[13px]">
                224-424-5400
              </H3>
            </Link>
          </div>
        </div>

        <CustomDrawer
          btn={
            <div className="hidden max-[940px]:block text-xl cursor-pointer">
              <AlignJustify />
            </div>
          }
          title={<Logo />}
        >
          <UL className="flex flex-col items-start gap-y-2 my-0">
            {headerNavItems?.map((single, index) => (
              <LI key={index}>
                <Link
                  href={single?.href}
                  className="text-[13px] max-sm:text-[10px]"
                >
                  {single?.name}
                </Link>
              </LI>
            ))}

            <Button className="bg-transparent border border-blue1 text-blue1 hover:bg-blue1 hover:text-white text-[13px] max-sm:text-[10px] px-3 h-6 rounded-sm">
              Login
            </Button>
            <Button className="hover:bg-blue2 text-white bg-blue1 text-[13px] max-sm:text-[10px] px-3 h-7 rounded-sm">
              Get Started
            </Button>
          </UL>
        </CustomDrawer>

        <div className="flex gap-x-2 max-sm:gap-x-1 max-[940px]:hidden">
          <Button className="bg-transparent border border-blue1 text-blue1 hover:bg-blue1 hover:text-white text-sm px-3 max-sm:px-2 max-sm:text-xs">
            Login
          </Button>

          <Button className="hover:bg-blue2 text-white bg-blue1 text-sm px-3 max-sm:px-2 max-sm:text-xs">
            Get Started
          </Button>
        </div>
      </main>
    </header>
  );
}

export default memo(Header);
