import ContactUs from "@/components/ContactUsSection/ContactUs";
import HeroSection from "@/components/heroSection/HeroSection";
import NavigationBar from "@/components/navigation/NavigationBar";


export default function Home() {
  return (
    <div className="flex flex-col max-w-[1920px]  mx-auto">
      <HeroSection/>
      <ContactUs/>
    </div>
  );
}
