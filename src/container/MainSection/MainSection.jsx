import React, { memo } from "react";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
import CustomCard from "@/components/CustomCard/CustomCard";
import { cardItems } from "@/utils/constant";

function MainSection() {
  return (
    <section className="bg-white2 border border-white3 rounded-[32px] mt-18 mx-4">
      <div className="container px-0">
        <main className="pt-20 pb-10">
          <ValueProposition
            tag="Why Us"
            title=" Why choose Amplify HRM?"
            paragraph={
              <>
                Comprehensive HR solutions that drive business growth. Reach out
                today to see how
                <span className="block">
                  we can save you serious $ while increasing your level of
                  service!
                </span>
              </>
            }
          />
        </main>

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-22 pt-6 ">
          {cardItems?.map((item, index) => (
            <CustomCard key={index} {...item} />
          ))}
        </main>
      </div>
    </section>
  );
}

export default memo(MainSection);
