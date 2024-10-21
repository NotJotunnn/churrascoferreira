import SobreNosCard from "../../components/sobrenos/SobreNosCard";
import Hero from "../HomeComponents/Hero";

import Colagem from '../../images/sobrenos/Colagem.png'
import Colagem2 from '../../images/sobrenos/Colagem2.png'
import CTA from "../../components/CTA";
import Depoimentos from "../../components/sobrenos/Depoimentos";

const SobreNos = () => {
  return (
    <div className="bg-[#555] text-black">
      <Hero props={{ CTA: false, title: 'Sobre Nós' }}/>
      <div className="w-full flex flex-col gap-20 pt-20 bg-background">
        <SobreNosCard props={{image: Colagem, title: 'Nossa História', text: ''}}/>
        <CTA props={{ background: '--accent3', text: 'Gostou do que viu?', social: 'WhatsApp' }}/>
        <SobreNosCard props={{image: Colagem2, title: 'Nossos Serviços', text: ''}}/>
        <Depoimentos />
      </div>
    </div>
  );
}
 
export default SobreNos;