export type PopUpContext = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  toggleShowSidebar: () => void;
}

export type DataContext = {
  AvailableTime: { onWeek: string, onWeekEnd: string };
  contactMail: string;
  contactPhone: string;
  socialLinks: SocialsType;
  setSocialLinks: React.Dispatch<React.SetStateAction<SocialsType>>;
  setAvailableTime: React.Dispatch<React.SetStateAction<{ onWeek: string, onWeekEnd: string }>>;
  setContactMail: React.Dispatch<React.SetStateAction<string>>;
  setContactPhone: React.Dispatch<React.SetStateAction<string>>;
}

export type SocialsType = {
  facebook: 'https://www.facebook.com/churrascoferreira',
  instagram: 'https://www.instagram.com/churrascos_ferreira_df/',
  whatsapp: '5561993605590',
}