import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center w-full py-12 bg-[#222]">
      <h2 className="font-semibold text-4xl text-center mb-12">Perguntas <br className="lg:hidden"/> Frequentes</h2>

      <div className="flex flex-col gap-5">
        <FAQCard props={{ title: 'O que está incluído no pacote base do churrasco?'}}>
          Sinta-se à vontade de entrar em contato! Apenas seja esperto pois temos horários de atuação durante o dia e aos finais de semana! <br /> <br />

          Telefone para contato (com Whatsapp): +55 (61) 99999-9999 | E-mail para contato: mail.mail@mail.com | Horário de trabalho: Seg-Sex 12:00 - 22:00 / Sab-Dom 14:00 - 18:00
        </FAQCard>
      </div>


    </div>
  );
}
 
export default FAQ;