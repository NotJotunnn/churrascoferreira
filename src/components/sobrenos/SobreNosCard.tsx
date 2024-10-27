import Image, { StaticImageData } from "next/image";
import CTABtn from "../CTABtn";
import { ReactNode } from "react";

const SobreNosCard = ({ props, children }: { props: { image: StaticImageData, title: string, odd?: boolean }, children?: ReactNode }) => {

  const { image, title, odd } = props

  return (
    <div className={`flex flex-col ${odd ? 'lg:flex-row' : 'lg:flex-row lg:odd:flex-row-reverse'} w-full items-center justify-center text-center lg:text-left gap-10 px-4`}>
      <Image className="mb-3 w-full lg:w-[510px] md:w-[415px]" src={image} width={630} height={400} alt="Colagem"/>
      <div className="max-w-[510px] gap-3 flex flex-col items-center lg:items-start">
        <h2 className="text-4xl font-semibold mb-3">{title}</h2>
        <div className="flex flex-col gap-2 text-sm">
          {children ? children : <>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae optio hic corporis veritatis, nemo beatae dicta dolores praesentium, ducimus iure corrupti aut porro necessitatibus tempore ab veniam, tenetur quo sequi!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae optio hic corporis veritatis, nemo beatae dicta dolores praesentium, ducimus iure corrupti aut porro necessitatibus tempore ab veniam, tenetur quo sequi!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae optio hic corporis veritatis, nemo beatae dicta dolores praesentium, ducimus iure corrupti aut porro necessitatibus tempore ab veniam, tenetur quo sequi!</p>
          </>}
        </div>
        <CTABtn props={{ social: 'WhatsApp', background: 'black' }}/>
      </div>
    </div>
  );
}
 
export default SobreNosCard;