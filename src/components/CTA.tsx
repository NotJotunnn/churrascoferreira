import CTABtn from "./CTABtn";

const CTA = ({ props }: { props: { background: string, text: string, text2?: string, social: string } }) => {
  const { background = '--accent3', text= 'Carregando...', text2= '', social = 'Whatsapp' } = props

  return (
    <div className={`py-10 flex justify-center items-center text-center px-4`}
    style={{ 
      backgroundColor: background.startsWith('--') ? `var(${background})` : 'var(--accent3)',
      color: background == '--accent2' ? 'white' : 'black',
     }}>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 lg:max-w-content lg:w-content">
        <div className="lg:text-left">
          <h2 className="text-4xl font-semibold max-w-[500px]">{text}</h2>
          {text2 && <h2 className="text-4xl font-semibold max-w-[500px]">{text2}</h2>}
        </div>
        <CTABtn props={{ social, background: '--accent' }}/>
      </div>
    </div>
  );
}
 
export default CTA;