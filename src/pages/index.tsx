import CTA from "../components/CTA";
import SobreNosCardGroup from "../components/sobrenos";
import Depoimentos from "../components/sobrenos/Depoimentos";
import Hero from "./HomeComponents/Hero";
import Menu from "./HomeComponents/Menu";

export default function Home() {
  return (
    <div className="bg-[#555]">
      <Hero props={{ CTA: true, title: 'Churrasco', title2: 'para toda família!' }}/>
      <Menu />
      <CTA props={{ background: '--accent3', text: 'Gostou do que viu?', social: 'WhatsApp' }}/>
      <SobreNosCardGroup />
      <Depoimentos />
      <CTA props={{ background: '--accent2', text: 'Gostou do que viu?', text2: 'Venha fazer parte da família!', social: 'WhatsApp' }}/>
    </div>
  );
}
