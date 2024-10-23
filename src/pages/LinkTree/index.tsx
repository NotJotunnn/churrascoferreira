import Image from 'next/image';
import Logo from '../../assets/Logo.svg'
import Clock from '../../assets/clock.svg'
import BACKGROUND from '../../images/linktree/linktreebg.png'

import { useDataState } from '../../contexts/Data';
import { DataContext } from '../../utils/interfaces';
import Link from 'next/link';

const LinkTree = () => {
  const { AvailableTime, socialLinks } = useDataState() as DataContext

  return (
    <div className="w-full h-[100dvh] flex-col justify-center items-center flex relative overflow-hidden">
      <div className="py-20 w-full h-full flex flex-col justify-center items-center z-10 animate-showUp">
        <Link href={'/'}>
          <Image src={Logo} width={115} height={100} alt='Logo'/>
        </Link>
        <div className="flex flex-col justify-center items-center mt-[90px] gap-6">
          <Link href={socialLinks.whatsapp} rel='external'><button className='bg-accent hover:brightness-75 py-2 px-6 rounded-lg'>WhatsApp - Contato</button></Link>
          <Link href={'/'}><button className='bg-accent hover:brightness-75 py-2 px-6 rounded-lg'>Website - Apresentação</button></Link>
          <Link href={socialLinks.instagram} rel='external'><button className='bg-accent hover:brightness-75 py-2 px-6 rounded-lg'>Instagram - Informativos</button></Link>
          <Link href={socialLinks.facebook} rel='external'><button className='bg-accent hover:brightness-75 py-2 px-6 rounded-lg'>Facebook - Informativos</button></Link>
        </div>
        <div className='flex flex-col mt-auto text-center items-center justify-center gap-2'>
          <Image src={Clock} width={22} height={22} alt='Horário de atendimento'/>
          <p>{AvailableTime.onWeek}</p>
          <p>{AvailableTime.onWeekEnd}</p>
        </div>
      </div>

      <Image className='absolute bottom-0 left-0 w-full h-full object-cover z-0 brightness-[70%]' src={BACKGROUND} alt='Plano de fundo'/>
    </div>
  );
}
 
export default LinkTree;