import MenuCard from "./MenuCard";
import Feijoada from '../../images/menu/Feijoada.png'
import Básico from '../../images/menu/Básico.png'
import Premium from '../../images/menu/Premium.png'

const Menu = () => {
  return (
    <div className="bg-background text-black flex justify-center items-center text-center py-12 px-4">
      <div className="lg:max-w-content lg:w-content">
        <h2 className="text-4xl font-medium mb-2">Nossos Cardápios</h2>
        <p className="opacity-50">Veja abaixo alguns dos cardápios que servimos.</p>

        <div className="flex flex-wrap justify-center items-center gap-4 py-8">
          <MenuCard props={{ text: 'Feijoada', link: '/', image: Feijoada }}/>
          <MenuCard props={{ text: 'Básico', link: '/', image: Básico }}/>
          <MenuCard props={{ text: 'Premium', link: '/', image: Premium }}/>
        </div>
      </div>
    </div>
  );
}
 
export default Menu;