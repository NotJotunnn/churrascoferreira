import CTA from "../components/CTA";
import Hero from "./HomeComponents/Hero";
import Menu from "./HomeComponents/Menu";

export default function Home() {
  return (
    <div className="bg-[#555]">
      <Hero />
      <Menu />
      <CTA props={{ background: 'accent3', text: 'Gostou do que viu?', social: 'WhatsApp' }}/>
      <div>
        
      </div>
    </div>
  );
}
