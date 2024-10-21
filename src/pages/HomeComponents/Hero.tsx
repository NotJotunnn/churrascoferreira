const Hero = ({ props = { CTA: false, title: '', title2: '' } }: { props?: { CTA?: boolean, title?: string, title2?: string } }) => {
  const { CTA = false, title = '', title2 = '' } = props;

  return (
    <div className="h-[80dvh] flex justify-center items-center text-center relative">
      <div className="lg:max-w-content lg:w-content flex flex-col justify-center items-center gap-y-12 z-10 px-4">
        <h1 className="text-6xl font-black text-white">{title}</h1>
        {title2 && <h1 className="text-6xl font-black text-white">{title2}</h1>}
        {CTA && <button className="bg-accent rounded-2xl py-2 px-6 text-lg hover:bg-accent2 transition duration-">Veja mais</button>}
      </div>

      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-50 backdrop-blur"></div>
    </div>
  );
}

export default Hero;