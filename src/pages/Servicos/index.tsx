import CTA from "../../components/CTA";
import Hero from "../../components/Hero";
import FAQ from "./ServicosComponentes/FAQ";
import MenuDetails from "./ServicosComponentes/MenuDetails";

const Servicos = () => {
  return (
    <div className="bg-[#555]">
      <Hero >
        Serviços
      </Hero>

      <div className="lg:block hidden">
        <CTA props={{ social: "WhatsApp", background: "--accent3" }}>
          Está gostando do que vê?
        </CTA>
      </div>

      <MenuDetails />
      {/* ? MenuViewer? */}

      <div className="lg:hidden block">
        <CTA props={{ social: "WhatsApp", background: "--accent3" }}>
          Gostou do que viu?
        </CTA>
      </div>

      <FAQ />

      <CTA props={{ social: "WhatsApp", background: "--accent2" }}>
        Tem mais alguma <br className="lg:hidden" /> dúvida?
      </CTA>
    </div>
  );
}
 
export default Servicos;