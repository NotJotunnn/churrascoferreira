import { ReactNode, useContext, createContext, useState } from "react";

const DataContext = createContext({});

export const useDataState = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [ AvailableTime, setAvailableTime ] = useState({onWeek: 'Seg-Sex 12:00 - 22:00', onWeekEnd: 'Sab-Dom 14:00 - 18:00'})
  const [ contactMail, setContactMail ] = useState('mail.mail@domain.com')
  const [ contactPhone, setContactPhone ] = useState('+55 (61) 99999-9999')

  const value = {
    AvailableTime,
    contactMail,
    contactPhone,
    setAvailableTime,
    setContactMail,
    setContactPhone,
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
