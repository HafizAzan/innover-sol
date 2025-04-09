import React, { memo } from "react";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import {
  company,
  companySize,
  contactInfo,
  contentLibrary,
  peoAndPrdouct,
  subfooterItems,
} from "@/utils/constant";
import Image from "next/image";
import { UL } from "@/components/ui/list";
import { H3, Paragraph } from "@/components/ui/typography";
import FooterItems from "@/components/FooterItems/FooterItems";

function SubFooter() {
  return (
    <section className="mt-10 mb-5">
      <div className="container">
        <main className="flex items-center justify-between max-sm:flex-col max-sm:items-start">
          <Logo />

          <UL className="my-0 flex items-center gap-x-6 max-sm:ml-0 max-sm:mt-4">
            {subfooterItems?.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <Image src={item.icon} alt="img-not-found" />
                </Link>
              );
            })}
          </UL>
        </main>

        <main className="mt-6">
          <Paragraph>
            Our mission is to help companies grow and succeed by offering unique
            HR solutions
            <span className="block">
              delivered through unrivaled customer service.
            </span>
          </Paragraph>

          <div className="pt-6">
            {contactInfo?.map((item, index) => (
              <div key={index} className="flex items-center gap-3 pb-4">
                {item.icon}
                <Link href={item.href}>
                  <Paragraph>{item.label}</Paragraph>
                </Link>
              </div>
            ))}
          </div>
        </main>

        <main className="flex items-start flex-wrap justify-between pt-4 pb-8 border-b border-b-gray1">
          <FooterItems data={peoAndPrdouct} />
          <FooterItems data={company} />
          <FooterItems data={companySize} />
          <FooterItems data={contentLibrary} />
        </main>
      </div>
    </section>
  );
}

export default memo(SubFooter);
