import HeroSection from "@/container/HeroSection/HeroSection";
import SubHeroSection from "@/container/SubHeroSection/SubHeroSection";
import MainSection from "@/container/MainSection/MainSection";
import CalculatorSection from "@/container/CalculatorSection/CalculatorSection";
import TestimonialsSection from "@/container/TestimonialsSection/TestimonialsSection";
import QuestionSection from "@/container/QuestionSection/QuestionSection";
import BannerSection from "@/container/BannerSection/BannerSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SubHeroSection />
      <MainSection />
      <CalculatorSection />
      <TestimonialsSection />
      <QuestionSection />
      <BannerSection />
    </>
  );
}
