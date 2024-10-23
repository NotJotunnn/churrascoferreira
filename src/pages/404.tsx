import Link from "next/link";

const Custom404Error = () => {
  return (
    <div className="lg:h-[65vh] h-[85dvh] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center bg-[#ffffff40] rounded-full w-[300px] h-[300px]">
        <h1 className="text-[100px] mb-[-20px]">404</h1>
        <h2 className="text-[20px]">Página não encontrada!</h2>
        <Link className="text-blue-400 underline" href={'/'}><p>Voltar para página inicial</p></Link>
      </div>
    </div>
  );
}
 
export default Custom404Error;