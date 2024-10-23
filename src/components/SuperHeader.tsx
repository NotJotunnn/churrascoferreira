import { useRouter } from "next/router";
import { useDataState } from "../contexts/Data";
import { DataContext } from "../utils/interfaces";

const SuperHeader = () => {
  const { AvailableTime, contactMail, contactPhone } = useDataState() as DataContext

  const router = useRouter()

  return (
    <div className={`${router.pathname.includes('LinkTree') ? 'hidden' : 'lg:flex hidden'} bg-[#222] text-white justify-center items-center w-screen`}>
      <ul className="flex gap-10 lg:max-w-content lg:w-content px-4 py-2">
        <li className="flex justify-center items-center gap-1 text-[14px]">
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
        <li className="flex justify-center items-center gap-1 text-[14px]">
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
          {AvailableTime.onWeek} / {AvailableTime.onWeekEnd}
        </li>
        <li className="ms-auto flex justify-center items-center gap-1 text-[14px]">
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
      </ul>
    </div>
  );
}
 
export default SuperHeader;