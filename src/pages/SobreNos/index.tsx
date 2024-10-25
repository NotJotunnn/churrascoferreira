import SobreNosCard from "../../components/sobrenos/SobreNosCard";
import Hero from "../../components/Hero";

import Colagem from "../../images/sobrenos/Colagem.png";
import Colagem2 from "../../images/sobrenos/Colagem2.png";
import CTA from "../../components/CTA";
import Depoimentos from "../../components/sobrenos/Depoimentos";

const SobreNos = () => {
  return (
    <div className="bg-[#555] text-black">
      <Hero props={{ CTA: false, title: "Sobre Nós" }} />
      <div className="w-full flex flex-col gap-20 pt-20 bg-background">
        <SobreNosCard props={{image: Colagem, title: 'Nossa História', text: 'Desde 2002, nossa empresa familiar é dedicada a oferecer o melhor do churrasco. Com uma paixão que atravessa gerações, combinamos tradição, sabor e qualidade em cada detalhe do nosso serviço. Trabalhamos com carnes selecionadas e preparamos tudo com o cuidado e a expertise que só uma família apaixonada pelo que faz pode oferecer.', text2: 'Nosso compromisso é proporcionar uma experiência autêntica de churrasco, seja em pequenos encontros ou grandes eventos, sempre com atendimento acolhedor e sabor inconfundível. Ao longo de mais de duas décadas, conquistamos a confiança dos nossos clientes, mantendo viva a tradição de um bom churrasco, feito com dedicação e respeito às origens.', text3: 'Venha conhecer nosso trabalho e saborear o que há de melhor em churrasco, preparado com amor e entrega.'}}/>
        <CTA props={{background: "--accent3",text: "Gostou do que viu?",social: "WhatsApp",}}/>
        <SobreNosCard
          props={{ image: Colagem2, title: "Nossos Serviços", text: "", odd: true }}
        />
        <Depoimentos />
      </div>
    </div>
  );
};

export default SobreNos;
