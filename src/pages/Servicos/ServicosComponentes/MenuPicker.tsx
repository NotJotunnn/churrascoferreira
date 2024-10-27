import Image from "next/image"

import Feijoada from '../../../images/servicos/Feijoada.svg'
import Basico from '../../../images/servicos/Básico.svg'
import Premium from '../../../images/servicos/Premium.svg'
import { useDataState } from "../../../contexts/Data"
import { DataContext } from "../../../utils/interfaces"

const MenuPicker = () => {
  const { selected, handleChangeSelected, autoRotationInterval } = useDataState() as DataContext

  const handleClick = (selectedNum: number) => {
    if(autoRotationInterval) clearInterval(autoRotationInterval)

    handleChangeSelected(selectedNum)
  }

  return (
    <div className="absolute flex lg:justify-center bg-[#00000070] z-20 w-full">
      <div className="w-full max-w-[970px] h-[70px] flex items-center">
        <button onClick={() => handleClick(0)} className={`px-3 h-full w-fit lg:w-full lg:gap-4 ${selected == 0 && 'bg-accent3 lg:bg-orange-500 text-black w-full gap-4'} ${selected == 1 && 'bg-accent3shade lg:bg-transparent text-black lg:text-white'} ${selected == 2 && 'bg-accent3shade2 lg:bg-transparent text-black lg:text-white'} font-semibold flex items-center text-[28px] ${selected == 0 && 'grow-1'}`}><Image className="max-w-[52px] min-h-[52px]" src={Feijoada} width={52} height={52} alt="Feijoado"/><span className={`${selected == 0 && 'w-full transition-all duration-400'} whitespace-nowrap block text-left w-0 lg:w-full overflow-hidden`}>Cardápio Feijoada</span></button>
        
        <button onClick={() => handleClick(1)} className={`px-3 h-full w-fit lg:w-full lg:gap-4 ${selected == 1 && 'bg-accent3 lg:bg-orange-500 text-black w-full gap-4'} ${(selected == 0 || selected == 2) && 'bg-accent3shade lg:bg-transparent text-black lg:text-white'} font-semibold flex items-center text-[28px] ${selected == 1 && 'grow-1'}`}><Image className="max-w-[52px] min-h-[52px]" src={Basico} width={52} height={52} alt="Feijoado"/><span className={`${selected == 1 && 'w-full transition-all duration-400'} whitespace-nowrap block text-left w-0 lg:w-full overflow-hidden`}>Cardápio Básico</span></button>

        <button onClick={() => handleClick(2)} className={`px-3 h-full w-fit lg:w-full lg:gap-4 ${selected == 2 && 'bg-accent3 lg:bg-orange-500 text-black w-full gap-4'} ${selected == 1 && 'bg-accent3shade lg:bg-transparent text-black lg:text-white'} ${selected == 0 && 'bg-accent3shade2 lg:bg-transparent text-black lg:text-white'} font-semibold flex items-center text-[28px] ${selected == 2 && 'grow-1'}`}><Image className="max-w-[52px] min-h-[52px]" src={Premium} width={52} height={52} alt="Feijoado"/><span className={`${selected == 2 && 'w-full transition-all duration-400'} whitespace-nowrap block text-left w-0 lg:w-full overflow-hidden`}>Cardápio Premium</span></button>
      </div>
    </div>
  )
}
 
export default MenuPicker