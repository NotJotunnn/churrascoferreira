import CTA from "../components/CTA";
import SobreNosCardGroup from "../components/sobrenos";
import Depoimentos from "../components/sobrenos/Depoimentos";
import Hero from "../components/Hero";
import Menu from "./HomeComponents/Menu";

export default function Home() {
  return (
    <div className="bg-[#555]">
      <Hero
        props={{ CTA: true }}
      >
        Churrasco <br />
        para toda família!
      </Hero>
      <Menu />
      <CTA
        props={{
          background: "--accent3",
          social: "WhatsApp",
        }}
      >
        Gostou do que viu?
      </CTA>
      <SobreNosCardGroup />
      <Depoimentos />
      <CTA
        props={{
          background: "--accent2",
          social: "WhatsApp",
        }}
      >
        Gostou do que viu? <br />
        Venha fazer parte da família!
      </CTA>
    </div>
  );
}
