import Image from 'next/image';
import Logo from '../assets/Logo.svg'
import Link from 'next/link';

import { useDataState } from '../contexts/Data';
import { DataContext } from '../utils/interfaces';
import { useRouter } from 'next/router';

const Footer = () => {
  const { AvailableTime, contactMail, contactPhone, socialLinks } = useDataState() as DataContext

  const router = useRouter()

  return (
    <footer className={`${router.pathname.includes('LinkTree') ? 'hidden' : 'lg:flex hidden'} bg-[#333] py-6 justify-center items-center px-4`}>
      <div className="flex lg:w-content md:w-full justify-between">
        <Link href='/'><Image src={Logo} alt="Logo" width={115} height={100}/></Link>

        <div>
          <h3 className="text-lg font-bold mb-[10px]">Navegação</h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="text-sm cursor-pointer"><Link href={'/'}>Início</Link></li>
            <li className="text-sm cursor-pointer"><Link href={'/SobreNos'}>Sobre</Link></li>
            <li className="text-sm cursor-pointer"><Link href={'/Galeria'}>Galeria</Link></li>
            <li className="text-sm cursor-pointer"><Link href={'/Servicos'}>Serviços</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-[10px]">Contato</h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex justify-left gap-x-[5px] items-center text-[12px]">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.43624 0.782697C3.34086 0.224768 2.95738 0.156082 2.58305 0.0433033C1.91406 -0.158251 0.629492 0.328799 0.180178 1.82015C-0.188059 3.04239 -0.0525705 4.54258 1.15928 7.09078C2.32881 9.54998 4.32908 11.2425 6.24985 11.7841C8.17061 12.3257 9.05901 10.8 9.22628 10.2448C9.30042 9.99874 9.1847 9.82994 9.08955 9.76489C8.53263 9.25629 7.50727 8.31232 7.267 8.12062C7.02674 7.92892 6.83951 8.03389 6.72658 8.08766C6.40767 8.24913 5.70689 8.79701 5.49157 8.90286C5.27625 9.00871 5.04941 8.85397 4.9629 8.76337C4.62539 8.49364 3.72394 7.71699 3.13652 6.66265C2.41004 5.35872 2.45292 4.99833 2.35137 4.63543C2.27013 4.34511 2.42868 4.22977 2.50501 4.18148C2.80296 3.99298 3.22692 3.69109 3.42279 3.53661C3.61867 3.38213 3.59952 3.05222 3.59006 2.84748C3.54941 1.96697 3.51254 1.22904 3.43624 0.782697Z"
                  fill="white"
                />
              </svg>
              {contactPhone}
            </li>
            <li className="flex justify-left gap-x-[5px] items-center text-[12px]">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.61111 1.64286L5.34356 4.60789L5.3448 4.60897C5.75924 4.92868 5.96658 5.08863 6.19369 5.15042C6.39442 5.20504 6.60542 5.20504 6.80615 5.15042C7.03346 5.08858 7.2414 4.92816 7.65658 4.60789C7.65658 4.60789 10.0506 2.67525 11.3889 1.64286M1 7.94298V3.05727C1 2.3372 1 1.9769 1.13321 1.70187C1.25039 1.45995 1.43723 1.2634 1.66721 1.14013C1.92866 1 2.27117 1 2.95567 1H10.0446C10.7291 1 11.0708 1 11.3323 1.14013C11.5623 1.2634 11.7497 1.45995 11.8669 1.70187C12 1.97663 12 2.3365 12 3.05516V7.94516C12 8.66382 12 9.02316 11.8669 9.29792C11.7497 9.53985 11.5623 9.73674 11.3323 9.86C11.0711 10 10.7295 10 10.0463 10H2.95367C2.2705 10 1.9284 10 1.66721 9.86C1.43723 9.73674 1.25039 9.53985 1.13321 9.29792C1 9.02289 1 8.66305 1 7.94298Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {contactMail}
            </li>
            <li className="flex justify-left gap-x-[5px] items-center text-[12px]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 3.44444V6.5H9.55556M6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5C12 9.53757 9.53757 12 6.5 12Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {AvailableTime.onWeek}
            </li>
            <li className="flex justify-left gap-x-[5px] items-center text-[12px]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 3.44444V6.5H9.55556M6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1C9.53757 1 12 3.46243 12 6.5C12 9.53757 9.53757 12 6.5 12Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {AvailableTime.onWeekEnd}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-[10px]">
          <h3 className="text-lg font-bold">Sobre nós</h3>
          <p className="text-[10px] w-[235px] text-opacity-50 text-[#ececec]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo repellendus ad, eveniet ex nobis adipisci doloremque cum aliquam assumenda nam ipsam a libero mollitia praesentium cupiditate amet illum earum consequuntur.
          </p>

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
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;