const Hero = () => {
  return (
    <div className="h-[80dvh] flex justify-center items-center text-center relative">
      <div className="lg:max-w-content lg:w-content flex flex-col justify-center items-center gap-y-12 z-10 px-4">
        <h1 className="text-6xl font-black">
          Churrasco <br/>
          para toda família!
        </h1>
        <button className="bg-accent rounded-2xl py-2 px-6 text-lg hover:bg-accent2 transition duration-">Veja mais</button>
      </div>

      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-50 backdrop-blur"></div>
    </div>
  );
}
 
export default Hero;