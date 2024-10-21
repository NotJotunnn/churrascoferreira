import SobreNosCard from "./SobreNosCard";

import Colagem from '../../images/sobrenos/Colagem.png'
import Colagem2 from '../../images/sobrenos/Colagem2.png'

const SobreNosCardGroup = () => {
  return (
    <div className="flex flex-col items-center gap-y-20 py-20 bg-background text-black">
      <SobreNosCard props={{image: Colagem, title: 'Nossa História', text: ''}}/>
      <SobreNosCard props={{image: Colagem2, title: 'Nossos Serviços', text: ''}}/>
    </div>
  );
}
 
export default SobreNosCardGroup;