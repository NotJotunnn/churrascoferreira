import { ReactNode, useContext, createContext, useState, useRef, useEffect } from "react";

const DataContext = createContext({});

export const useDataState = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [ AvailableTime, setAvailableTime ] = useState({onWeek: 'Seg-Sex 12:00 - 22:00', onWeekEnd: 'Sab-Dom 14:00 - 18:00'})
  const [ contactMail, setContactMail ] = useState('mail.mail@domain.com')
  const [ contactPhone, setContactPhone ] = useState('+55 (61) 99999-9999')

  const [ selected, setSelected ] = useState<number>(0)
  const [autoRotationInterval, setAutoRotationInterval] = useState<ReturnType<typeof setInterval> | null>(null)
  const localSelectionRef = useRef(selected)

  useEffect(() => {
    localSelectionRef.current = selected
  }, [selected])

  useEffect(() => {
    const interval = setInterval(() => {
      rotateThroughSelections()
    }, 5000)

    setAutoRotationInterval(interval)

    return () => clearInterval(interval)
  }, [])

  const rotateThroughSelections = () => {
    if (localSelectionRef.current === 2) {
      handleChangeSelected(0)
    } else {
      handleChangeSelected(localSelectionRef.current + 1)
    }
  }

  const handleChangeSelected = (selectedNum: number) => {
    setSelected(selectedNum)
  }

  const [ socialLinks, setSocialLinks ] = useState({
    facebook: 'https://www.facebook.com/churrascoferreira',
    instagram: 'https://www.instagram.com/churrascos_ferreira_df/',
    whatsapp: 'https://wa.me/5561993605590?text=Ol%C3%A1!%20Estou%20gostaria%20de%20saber%20mais%20sobre%20o%20churrasco%20de%20voc%C3%AAs',
  })

  const value = {
    AvailableTime,
    contactMail,
    contactPhone,
    socialLinks,
    selected,
    autoRotationInterval,
    handleChangeSelected,
    setSocialLinks,
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
