export type PopUpContext = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  toggleShowSidebar: () => void;
}

export type DataContext = {
  AvailableTime: { onWeek: string, onWeekEnd: string };
  contactMail: string;
  contactPhone: string;
  setAvailableTime: React.Dispatch<React.SetStateAction<{ onWeek: string, onWeekEnd: string }>>;
  setContactMail: React.Dispatch<React.SetStateAction<string>>;
  setContactPhone: React.Dispatch<React.SetStateAction<string>>;
}