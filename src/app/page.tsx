import Header from "@/components/layout/Header";
import Hero from "@/common/hero/Hero";
import Services from "@/common/services/Services";
import WhyChoose from "@/common/whychoose/WhyChoose";
import Industries from "@/common/industries/Industries";
import Testimonials from "@/common/testimonials/Testimonials";
import Footer from "@/common/footer/Footer";


export default function Home() {
  return (
    <>
     
      <Hero />
      <Services />
      <WhyChoose />
      <Industries />
      <Testimonials />
    
    </>
  );
}