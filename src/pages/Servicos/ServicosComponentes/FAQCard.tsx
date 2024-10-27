import { ReactNode, useState } from "react";

import Caret from '../../../assets/Caret.svg'
import Image from "next/image";

const FAQCard = ({ props = { title: 'Carregando' }, children }: { props: { title: string }; children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const { title } = props;

  const handleClick = () => setIsActive(prev => !prev);

  return (
    <label className="max-w-content w-[90vw] flex flex-col relative bg-[#333] rounded-lg overflow-hidden text-black">
      <h3 className="text-sm font-semibold px-2 py-5 flex justify-between cursor-pointer bg-background rounded-lg">
        {title}
        <Image className={`${isActive ? 'rotate-0' : 'rotate-180'} transition-transform duration-400`} src={Caret} alt="Caret" width={23} height={18}/>
      </h3>

      <input 
        className="peer w-0 h-0"
        type="checkbox"
        onClick={handleClick}
        onChange={() => setIsActive(!isActive)}
      />

      <p className={`max-h-0 px-2 text-sm overflow-hidden transition-max-height duration-400 ${isActive ? 'max-h-screen py-2' : 'py-0'} text-white`}>
        {children}
      </p>
    </label>
  );
}

export default FAQCard;
