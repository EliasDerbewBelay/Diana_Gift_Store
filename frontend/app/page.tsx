import Hero from "@/components/sections/home/Hero";
import Feature from "@/components/sections/home/Feature";
import About from "@/components/sections/home/About";
import Testimonies from "@/components/sections/home/Testimonies";
import CTA from "@/components/sections/home/CTA";


export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Testimonies />
      <CTA />
    </div>
  );
}
