import CTABtn from "./CTABtn";

const CTA = ({ props }: { props: { background: string, text: string, social: string } }) => {
  const { background = 'accent3', text= 'Carregando...', social = 'Whatsapp' } = props

  return (
    <div className={`bg-${background} text-black py-10 flex justify-center items-center px-4`}>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 lg:max-w-content lg:w-content">
        <h2 className="text-4xl font-bold">{text}</h2>
        <CTABtn props={{ social }}/>
      </div>
    </div>
  );
}
 
export default CTA;