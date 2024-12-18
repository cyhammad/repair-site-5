import AboutSection from "@/components/sections/AboutSection";
import MainBanner from "@/components/sections/MainBanner";
import OurServices from "@/components/sections/OurServices";
import ServiceDetails from "@/components/sections/ServiceDetails";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const Company = async ({ params }) => {
  const { slug } = await params; // Await the params
  const company = slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <>
      <Header company={company} />
      <MainBanner company={company} />
      <OurServices company={company} />
      <AboutSection company={company} />
      <WhyChooseUs company={company} />
      <ServiceDetails company={company} />
      <Footer company={company} />
    </>
  );
};

export default Company;
