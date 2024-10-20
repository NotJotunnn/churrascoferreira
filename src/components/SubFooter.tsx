import Link from "next/link";

const SubFooter = () => {
  return (
    <div className="flex justify-center lg:py-[10px] py-[20px] bg-[#222]">
      <div className="lg:w-content w-full md:px-4 flex flex-col gap-y-2 lg:flex-row justify-between items-center">
        <p className="text-sm">© 2024 Churrascos Ferreira. Todos direitos reservados.</p>
        <p className="text-sm">Site feito com amor por um <Link className="underline text-blue-600 visited:text-purple-600" href={'https://github.com/NotJotunnn/churrascoferreira/tree/main'} rel="external" target="_blank">dev talentoso</Link></p>
      </div>
    </div>
  );
}
 
export default SubFooter;