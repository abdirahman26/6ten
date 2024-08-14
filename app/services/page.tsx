import NavBar from "../NavBar";
import ServicesSection from "../sections/Services/ServicesSection";
import ServicesTopSection from "../sections/Services/ServicesTopSection";
import ServicesMiddleAction from "@/sections/Services/SevicesMiddleSection";
import ServicesAction from "@/sections/Services/ServicesAction";
import FAQSection from "@/sections/Services/ServicesFAQSection";

export default function Page() {
  return (
    <>
      <NavBar />
      <ServicesTopSection />
      <ServicesSection />
      <ServicesMiddleAction />
      <ServicesAction />
      <FAQSection />
    </>
  );
}
