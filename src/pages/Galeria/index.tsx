import CTA from "../../components/CTA";
import Hero from "../../components/Hero";
import Gallery from './data.json'
import Post from "./GaleriaComponents/Post";

const Galeria = () => {
  return (
    <div className="bg-[#555]">
      <Hero props={{ CTA: false, title: 'Galeria' }}/>
      <div className="py-20 flex flex-col justify-center items-center bg-background text-black">
        <h2 className="text-4xl font-semibold">Galeria</h2>
        <p className="opacity-50">Veja aqui algumas de nossas experiências</p>
        
        <div className="grid grid-cols-3 max-w-[908px] gap-1 mt-8">
          {Gallery.map((el, index) => <Post key={index} props={{image: el, index}} />)}
        </div>
      </div>
      <CTA props={{ background: "--accent2", social: "Instagram", text: "Essas fotos vêm diretamente do nosso Instagram!" }}/>
      <CTA props={{ background: "--accent3", social: "WhatsApp", text: "Gostou do que viu?" }}/>
    </div>
  );
}
 
export default Galeria;