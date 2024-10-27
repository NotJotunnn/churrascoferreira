import { useEffect, useState } from "react";
import CTABtn from "../../../components/CTABtn";

import BackgroundImage from '../../../images/servicos/engin-akyurt-6dPXcMvniHU-unsplash.jpg'
import BackgroundImage2 from '../../../images/servicos/benjamin-ashton-TP501SPRzPY-unsplash.jpg'
import BackgroundImage3 from '../../../images/servicos/serhii-kalyn-XELZYG_aXkU-unsplash.jpg'

import Image, { StaticImageData } from "next/image";
import MenuPicker from "./MenuPicker";
import { useDataState } from "../../../contexts/Data";
import { DataContext } from "../../../utils/interfaces";

const MenuDetails = () => {
  const [ bgImage, setBgImage ] = useState<StaticImageData>(BackgroundImage)
  const [ isLeaving, setIsLeaving ] = useState<boolean>(false)

  const { selected, autoRotationInterval } = useDataState() as DataContext

  const menus = [ 
    { 
      name: 'Feijoada',
      text: '',
      backgroundImage: BackgroundImage
    },
    { 
      name: 'Básico',
      text: '',
      backgroundImage: BackgroundImage2
    },
    { 
      name: 'Premium',
      text: '',
      backgroundImage: BackgroundImage3
    },
  ]

  useEffect(() => {
    setIsLeaving(true)

    const timeout = setTimeout(() => {
      setBgImage(menus[selected].backgroundImage)

      setIsLeaving(false)
    }, 400);

    return () => clearTimeout(timeout)
  }, [selected])

  const handleClick = () => {
    if(autoRotationInterval) clearInterval(autoRotationInterval)
  }

  return (
    <div className="relative flex justify-center overflow-hidden min-h-[80dvh]">
      <MenuPicker />
      
      <div className="w-full h-[80dvh] bg-[#00000070] text-white flex flex-col justify-center items-center overflow-hidden text-justify gap-5 z-10 px-4 py-12 backdrop-blur-sm">
        <h2 className="font-semibold text-4xl">Cardápio {menus[selected]?.name}</h2>

        <p className="text-sm max-w-[470px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius minima obcaecati velit praesentium non in! Dignissimos deserunt quam ipsam, repudiandae debitis, inventore dolor, omnis harum sapiente atque asperiores blanditiis!
        Excepturi, praesentium tenetur laborum a, quibusdam accusantium illo dolores cum blanditiis non incidunt ipsam nulla sint quo et neque impedit deserunt minus iste voluptatum saepe dolorem asperiores ea. Voluptatibus, obcaecati.</p>

        <CTABtn props={{background: '--accent', social: 'WhatsApp'}} onclick={handleClick}/>

        <button onClick={handleClick} className="text-white w-fit max-h-[41px] px-6 py-2 rounded-2xl flex justify-center items-center gap-2 hover:brightness-75 shadow-md shadow-[#00000070] hover:shadow-none transition-shadow duration-400 bg-black" >Ver Cardápio</button>
      </div>

      <div className="absolute bottom-0 w-full h-[240px] lg:bg-gradient-to-t from-[#222] to-transparent z-20 pointer-events-none"></div>

      <Image className={`absolute w-full h-full object-cover ${isLeaving ? 'animate-vanish' : 'animate-showUp2'}`} src={bgImage} alt="Fundo"/>
    </div>
  );
}
 
export default MenuDetails;