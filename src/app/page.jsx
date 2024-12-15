import AboutSection from "@/components/sections/AboutSection";
import MainBanner from "@/components/sections/MainBanner";
import OurServices from "@/components/sections/OurServices";
import ServiceDetails from "@/components/sections/ServiceDetails";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-10">
      <Header />
      <MainBanner />
      <WhyChooseUs />
      <AboutSection />
      <OurServices />
      <ServiceDetails />
      <Footer />
    </div>
  );
}
