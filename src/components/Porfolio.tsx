function Portfolio() {
  return (
    <>
      <div className="flex items-center flex-col gap-y-8 mt-10 relative pb-5">
        <h1 className="header">Portfolio</h1>
        <div className="bg-gradient-to-tr from-[#0BE4CC] to-sky-500 h-0.5 w-1/2"></div>
        <div className="bg-gradient-to-tr from-[#0BE4CC] to-sky-500 h-6 w-6 left-[24%] top-[66%] rounded-full absolute"></div>
        <div className="bg-gradient-to-tr from-[#0BE4CC] to-sky-500 h-6 w-6 right-[24%] top-[66%] rounded-full absolute"></div>
      </div>
      <div className="flex flex-col  px-[9%] py-5">
        <div className="flex flex-col md:flex-row gap-20 mb-10">
          <div className="md:w-1/2 h-60 bg-[#0C2A36] rounded-md"></div>
          <div className="md:w-1/2 h-60 bg-[#0C2A36] rounded-md"></div>
        </div>{" "}
        <div className="relative flex justify-center h-10 ">
          <div className="bg-gradient-to-tr from-[#0BE4CC] to-sky-500 h-0.5 w-1/2"></div>
          <div className="bg-gradient-to-tr from-[#0BE4CC] to-sky-500 h-6 w-6 left-[24%] top-[-30%] rounded-full absolute"></div>
          <div className="bg-gradient-to-tr from-[#0BE4CC] to-sky-500 h-6 w-6 right-[24%] top-[-30%] rounded-full absolute"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-20 mb-10">
          <div className="md:w-1/2 h-60 bg-[#0C2A36] rounded-md"></div>
          <div className="md:w-1/2 h-60 bg-[#0C2A36] rounded-md"></div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
