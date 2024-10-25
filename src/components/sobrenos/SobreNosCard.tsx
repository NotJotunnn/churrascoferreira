import Image, { StaticImageData } from "next/image";
import CTABtn from "../CTABtn";

const SobreNosCard = ({ props }: { props: { image: StaticImageData, title: string, text: string, text2?: string, text3?: string, odd?: boolean } }) => {

  const { image, title, text, text2, text3, odd } = props

  return (
    <div className={`flex flex-col ${odd ? 'lg:flex-row' : 'lg:flex-row lg:odd:flex-row-reverse'} w-full items-center justify-center text-center lg:text-left gap-10 px-4`}>
      <Image className="mb-3 w-full lg:w-[510px] md:w-[415px]" src={image} width={630} height={400} alt="Colagem"/>
      <div className="max-w-[510px] gap-3 flex flex-col items-center lg:items-start">
        <h2 className="text-4xl font-semibold mb-3">{title}</h2>
        <div className="flex flex-col gap-2 text-sm">
          {text ? <p>{text}</p> : <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, reiciendis nam, in facere mollitia quo eum eaque omnis, consectetur fugiat accusamus aliquam. Tempora ducimus possimus cum cupiditate velit autem qui.
          Fugit, doloremque! Quasi cum repellat consequuntur corrupti dolorum amet quam. Voluptatibus a blanditiis enim vitae, cum nostrum impedit dolores iste dolorem nisi accusamus similique et. Optio laborum culpa non consequatur.</p>}
          {text2 && <p>{text2}</p>}
          {text3 && <p className="mb-5">{text3}</p>}
        </div>
        <CTABtn props={{ social: 'WhatsApp', background: 'black' }}/>
      </div>
    </div>
  );
}
 
export default SobreNosCard;