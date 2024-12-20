import Image from "next/image";
import Link from "next/link";

import Logo from '../assets/Logo.svg'

import { usePopUpState } from "../contexts/Popup";
import { DataContext, PopUpContext } from "../utils/interfaces";
import { useDataState } from "../contexts/Data";
import { useRouter } from "next/router";

const Header = () => {
  const { toggleShowSidebar, showSidebar } = usePopUpState() as PopUpContext
  const { socialLinks } = useDataState() as DataContext

  const router = useRouter()

  const handleClick = () => {
    toggleShowSidebar()
  }

  return (
    <header className={`${router.pathname.includes('LinkTree') ? 'hidden' : 'flex'} w-screen py-2 justify-center items-center bg-[#333] sticky top-[-1px] z-40 px-4`}>
      <div className="lg:max-w-content lg:w-content w-full flex justify-between items-center h-full">
        <Link className={`${showSidebar ? 'opacity-0 cursor-auto' : 'opacity-100 cursor-pointer'} transition-opacity duration-400`} href={'/'}><Image src={Logo} alt="logo do Churrascos Ferreira" width={60} height={55}/></Link>

        <nav className="lg:flex hidden gap-x-[45px] justify-center items-center">
          <ul className="flex gap-x-10">
            <li className="text-[22px] group relative"><Link href="/">Início</Link><div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-white"></div></li>
            <li className="text-[22px] group relative"><Link href={'/SobreNos'}>Sobre</Link><div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-white"></div></li>
            <li className="text-[22px] group relative"><Link href={'/Galeria'}>Galeria</Link><div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-white"></div></li>
            <li className="text-[22px] group relative"><Link href={'/Servicos'}>Serviços</Link><div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-white"></div></li>
          </ul>

          <ul className="flex gap-x-[10px]">
            <li className="cursor-pointer">
              <Link href={socialLinks.facebook} rel="external" target="_blank">
                <svg className="hover:text-[#0866ff] transition-colors duration-400" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8.99453" cy="8.99453" r="8.99453"/>
                  <path d="M12.3442 11.7455L12.7437 9.20679H10.2443V7.56008C10.2443 6.86538 10.5928 6.18782 11.7123 6.18782H12.8493V4.02651C12.8493 4.02651 11.8179 3.85498 10.8322 3.85498C8.77278 3.85498 7.42799 5.07113 7.42799 7.2719V9.20679H5.13974V11.7455H7.42799V17.8829C7.88738 17.9532 8.35736 17.9892 8.83613 17.9892C9.3149 17.9892 9.78488 17.9532 10.2443 17.8829V11.7455H12.3442Z" fill="black"/>
                </svg>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={socialLinks.instagram} rel="external" target="_blank">
                <svg className="hover:text-[#d54370] transition-colors duration-400" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.126343" y="0.237793" width="17.5132" height="17.5132" rx="6"/>
                  <path d="M13.2612 5.55436C13.2612 6.07252 12.8412 6.49256 12.323 6.49256C11.8049 6.49256 11.3848 6.07252 11.3848 5.55436C11.3848 5.0362 11.8049 4.61616 12.323 4.61616C12.8412 4.61616 13.2612 5.0362 13.2612 5.55436Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.88293 12.1218C10.6101 12.1218 12.0103 10.7216 12.0103 8.99444C12.0103 7.26726 10.6101 5.86709 8.88293 5.86709C7.15574 5.86709 5.75558 7.26726 5.75558 8.99444C5.75558 10.7216 7.15574 12.1218 8.88293 12.1218ZM8.88293 10.8709C9.91924 10.8709 10.7593 10.0308 10.7593 8.99444C10.7593 7.95813 9.91924 7.11803 8.88293 7.11803C7.84662 7.11803 7.00652 7.95813 7.00652 8.99444C7.00652 10.0308 7.84662 10.8709 8.88293 10.8709Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.62823 8.74426C2.62823 6.64248 2.62823 5.59159 3.03727 4.78882C3.39706 4.08268 3.97117 3.50857 4.67731 3.14878C5.48008 2.73975 6.53097 2.73975 8.63274 2.73975H9.13312C11.2349 2.73975 12.2858 2.73975 13.0886 3.14878C13.7947 3.50857 14.3688 4.08268 14.7286 4.78882C15.1376 5.59159 15.1376 6.64248 15.1376 8.74426V9.24463C15.1376 11.3464 15.1376 12.3973 14.7286 13.2001C14.3688 13.9062 13.7947 14.4803 13.0886 14.8401C12.2858 15.2491 11.2349 15.2491 9.13312 15.2491H8.63274C6.53097 15.2491 5.48008 15.2491 4.67731 14.8401C3.97117 14.4803 3.39706 13.9062 3.03727 13.2001C2.62823 12.3973 2.62823 11.3464 2.62823 9.24463V8.74426ZM8.63274 3.99069H9.13312C10.2046 3.99069 10.9331 3.99166 11.4961 4.03766C12.0445 4.08247 12.325 4.16369 12.5206 4.26337C12.9914 4.50324 13.3741 4.88598 13.614 5.35674C13.7137 5.55238 13.7949 5.83285 13.8397 6.38128C13.8857 6.94431 13.8867 7.67273 13.8867 8.74426V9.24463C13.8867 10.3162 13.8857 11.0446 13.8397 11.6076C13.7949 12.156 13.7137 12.4365 13.614 12.6322C13.3741 13.1029 12.9914 13.4856 12.5206 13.7255C12.325 13.8252 12.0445 13.9064 11.4961 13.9512C10.9331 13.9972 10.2046 13.9982 9.13312 13.9982H8.63274C7.56121 13.9982 6.8328 13.9972 6.26977 13.9512C5.72134 13.9064 5.44087 13.8252 5.24522 13.7255C4.77447 13.4856 4.39173 13.1029 4.15186 12.6322C4.05218 12.4365 3.97096 12.156 3.92615 11.6076C3.88015 11.0446 3.87917 10.3162 3.87917 9.24463V8.74426C3.87917 7.67273 3.88015 6.94431 3.92615 6.38128C3.97096 5.83285 4.05218 5.55238 4.15186 5.35674C4.39173 4.88598 4.77447 4.50324 5.24522 4.26337C5.44087 4.16369 5.72134 4.08247 6.26977 4.03766C6.8328 3.99166 7.56121 3.99069 8.63274 3.99069Z" fill="black"/>
                </svg>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={socialLinks.whatsapp} rel="external" target="_blank">
                <svg className="hover:text-[#2ab540] transition-colors duration-400" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8676 8.68809C15.8676 12.6531 12.6534 15.8674 8.68834 15.8674C7.176 15.8674 5.77287 15.3998 4.61567 14.6012L2.1617 15.2147L2.80475 12.8033C1.98821 11.638 1.50903 10.219 1.50903 8.68809C1.50903 4.72307 4.72332 1.50879 8.68834 1.50879C12.6534 1.50879 15.8676 4.72307 15.8676 8.68809Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.68835 17.0642C13.3142 17.0642 17.0642 13.3142 17.0642 8.68835C17.0642 4.0625 13.3142 0.3125 8.68835 0.3125C4.0625 0.3125 0.3125 4.0625 0.3125 8.68835C0.3125 10.1906 0.707958 11.6004 1.40045 12.8194L0.3125 17.0642L4.6888 16.0494C5.87728 16.6965 7.23988 17.0642 8.68835 17.0642ZM8.68835 15.7756C12.6025 15.7756 15.7756 12.6025 15.7756 8.68835C15.7756 4.77417 12.6025 1.60109 8.68835 1.60109C4.77417 1.60109 1.60109 4.77417 1.60109 8.68835C1.60109 10.1996 2.07412 11.6004 2.8802 12.7508L2.24539 15.1313L4.6679 14.5257C5.81027 15.314 7.1954 15.7756 8.68835 15.7756Z" fill="black"/>
                  <path d="M6.59442 4.79946C6.39527 4.39947 6.08978 4.43488 5.78115 4.43488C5.2296 4.43488 4.36957 5.09555 4.36957 6.32511C4.36957 7.3328 4.81361 8.43587 6.30987 10.086C7.75389 11.6784 9.65123 12.5022 11.2264 12.4742C12.8015 12.4461 13.1256 11.0907 13.1256 10.6329C13.1256 10.43 12.9997 10.3288 12.913 10.3013C12.3762 10.0437 11.3862 9.56368 11.1609 9.4735C10.9357 9.38332 10.8181 9.5053 10.7449 9.57166C10.5407 9.76632 10.1357 10.34 9.9971 10.4691C9.85846 10.5981 9.65176 10.5328 9.56574 10.484C9.24921 10.357 8.39098 9.97526 7.70688 9.3121C6.86083 8.49196 6.81118 8.20979 6.65178 7.95861C6.52426 7.75767 6.61784 7.63439 6.66453 7.58051C6.84681 7.37018 7.09851 7.04545 7.21139 6.88408C7.32427 6.72271 7.23466 6.47771 7.18089 6.32511C6.94964 5.66883 6.75373 5.11946 6.59442 4.79946Z" fill="black"/>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={handleClick} className="block lg:hidden">
          <svg className={showSidebar ? 'hidden' : 'block'} width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 24H36M3 13.5H36M3 3H36" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className={showSidebar ? 'block' : 'hidden'} width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.9998 30.9998L18.5 16.5M18.5 16.5L2 2M18.5 16.5L35 2M18.5 16.5L2 31" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
 
export default Header;