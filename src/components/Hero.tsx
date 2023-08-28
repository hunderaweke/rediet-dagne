import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <>
      <div className="flex justify-evenly gap-10">
        <div className="w-full text-start font-brand flex flex-col py-44 pl-36">
          <h3 className="text-5xl">I am Rediet Dagne</h3>
          <TypeAnimation
            sequence={["A Graphics Designer", 1000, "An Architect", 1000]}
            repeat={Infinity}
            className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-lime-400"
          />
          <p className="font-normal tracking-tighter text-xl">
            I am a passionated graphics designer with high level of skill and
            professional ethics and philosophy with so many projects and
            statisfied clients and quality products and modern designs.
          </p>
          <div className="font-normal flex w-full justify-center gap-10">
            <div className="bg-gradient-to-tr from-sky-500 to-lime-400 p-0.5 rounded-full">
              <button className="bg-[#0C2A36] py-2 px-6 rounded-full">
                Download Cv
              </button>
            </div>
            <div className="bg-gradient-to-tr from-sky-500 to-lime-400 p-0.5 rounded-full">
              <button className="bg-[#0C2A36] py-2 px-6 rounded-full">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-32">
          <div className="border-none w-[27rem] h-[27rem] rounded-full bg-gradient-to-bl from-sky-500 to-green-500 shadow-[#0BE4CC] shadow-[0px_0px_190px_15px]"></div>
        </div>
      </div>
    </>
  );
}
export default Hero;