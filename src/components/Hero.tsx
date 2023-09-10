import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row mx-4 justify-evenly gap-10">
        <div className="w-full text-center md:text-start font-brand flex flex-col gap-3 md:gap-10 md:py-44 md:px-16">
          <h3 className="text-2xl md:text-5xl">I am Rediet Dagne</h3>
          <TypeAnimation
            sequence={["A Graphics Designer", 1000, "An Architect", 1000]}
            repeat={Infinity}
            className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-l from-[#0BE4CC] to-sky-500"
          />
          <p className="font-normal tracking-tighter md:text-xl">
            I am a passionated graphics designer with high level of skill and
            professional ethics and philosophy with so many projects and
            statisfied clients and quality products and modern designs.
          </p>
          <div className="font-normal flex w-full text-sm md:text-lg justify-center gap-10">
            <div className="bg-gradient-to-tl from-[#0BE4CC] to-sky-500 p-0.5 rounded-full">
              <button className="bg-[#0C2A36] hover:bg-transparent duration-500 py-2 px-6 rounded-full">
                Download Cv
              </button>
            </div>
            <div className="bg-gradient-to-tl from-[#0BE4CC] to-sky-500 p-0.5 rounded-full">
              <button className="bg-[#0C2A36] hover:bg-transparent duration-500 py-2 px-6 rounded-full">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-3 md:py-32">
          <div className="border-none w-64 h-64 md:w-[27rem] md:h-[27rem] rounded-full overflow-hidden bg-gradient-to-bl from-[#0BE4CC] to-sky-500 shadow-[#0BE4CC] shadow-[0px_0px_190px_15px]">
            <img
              src="hero-image.png"
              className="max-w-[120%] h-[120%]"
              alt="Rediet Dagne"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
