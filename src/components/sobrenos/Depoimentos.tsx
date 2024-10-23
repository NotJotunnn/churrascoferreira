import Client1 from '../../images/sobrenos/clients/BANCODOBRASILcliente.png'
import Client2 from '../../images/sobrenos/clients/CAIXAcliente 2.png'
import Client3 from '../../images/sobrenos/clients/CBMDFcliente.png'
import Client4 from '../../images/sobrenos/clients/PMDFcliente.png'
import Client5 from '../../images/sobrenos/clients/SANTANDERcliente.png'
import Client6 from '../../images/sobrenos/clients/SINDIPOLcliente.png'
import Image from "next/image";

const Depoimentos = () => {
  return (
    <div className="bg-[#222] text-white flex flex-col items-center text-center py-12 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-semibold mb-4">Empresas que confiam no nosso trabalho</h2>
      <p className="text-lg mb-10">Veja abaixo alguns dos nossos clientes parceiros</p>

      <div className="flex flex-col items-center z-10 gap-5">
        <div className="flex flex-col gap-5 items-center lg:flex-wrap lg:flex-row">
          <Image src={Client1} width={250} alt="Logo do banco do Brasil"/>
          <Image src={Client5} width={180} alt="Logo do banco do Santander"/>
          <Image src={Client2} width={130} alt="Logo do banco do CAIXA"/>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-wrap lg:flex-row">
          <Image src={Client4} width={115} alt="Logo do banco do PMDF"/>
          <Image src={Client6} width={150} alt="Logo do banco do SINDIPOL"/>
          <Image src={Client3} width={200} alt="Logo do banco do CBMDF"/>
        </div>
      </div>

      <div className="w-full h-[60vw] max-h-[335px] max-w-[560px] lg:max-h-[600px] lg:max-w-[1100px] absolute bottom-0 lg:bottom-[-125%] bg-white rounded-tl-full rounded-tr-full z-0"></div>
    </div>
  );
}
 
export default Depoimentos;