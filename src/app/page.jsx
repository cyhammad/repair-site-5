import AboutSection from "@/components/sections/AboutSection";
import MainBanner from "@/components/sections/MainBanner";
import OurServices from "@/components/sections/OurServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <MainBanner />
      <OurServices />
      <AboutSection />
      <WhyChooseUs />
    </>
  );
}
