import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const MenuCard = ({ props = {} }: { props?: { text?: string, link?: string, image?: StaticImageData } }) => {
  const { text = 'Loading', link = '/', image } = props;

  return (
    <div className="w-[315px] h-[220px] text-white rounded-[10px] flex justify-center items-center relative overflow-hidden group">
      <div className="z-10 lg:translate-y-40 flex flex-col items-center gap-2 lg:group-hover:translate-y-0 transition-transform duration-400 delay-100">
        {text && <h3 className="text-2xl font-semibold">Cardápio {text}</h3>}
        <Link href={link}><button className="text-lg py-2 px-8 w-fit bg-black lg:hover:bg-white lg:hover:text-black transition duration-400 rounded-2xl">Veja mais</button></Link>
      </div>

      {image && <Image className="absolute top-0 left-0" src={image} width={315} height={220} alt={`Imagem de ${text}`} />}

      <div className="absolute top-0 left-0 bg-black lg:opacity-0 lg:group-hover:opacity-40 opacity-40 transition duration-400 w-full h-full backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent2opaque from-30% to-transparent to-90% lg:translate-y-60 lg:group-hover:translate-y-0 transition-transform duration-400 delay-200"></div>
    </div>
  );
};

export default MenuCard;
