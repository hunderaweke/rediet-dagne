function NavBar() {
  return (
    <>
      <div className="sticky top-1 z-40 w-full backdrop-blur-lg flex-none transition-colors duration-500  supports-backdrop-blur:bg-white/75 dark:bg-[#02141C]/80 flex justify-between">
        <div className="px-20 py-3">
          <h1 className="font-brand tracking-wider inline text-transparent bg-clip-text bg-gradient-to-br font-bold from-[#0BE4CC] to-sky-500 lg:text-5xl md:text-4xl">
            Rediet
          </h1>
          <h1 className="font-brand ml-4 inline text-transparent bg-clip-text bg-gradient-to-bl font-bold from-[#0BE4CC] to-sky-500 lg:text-5xl md:text-4xl">
            Dagne
          </h1>
          <div className="w-10 h-10 rounded-full t bg-gradient-to-bl font-bold ffrom-[#0BE4CC] to-sky-500 absolute blur-lg left-48 top-3"></div>
        </div>
        <div className="px-10 font-normal flex text-xl  items-center gap-10 text-transparent bg-clip-text bg-gradient-to-bl font-bold from-[#0BE4CC] to-sky-500 tracking-[-0.1rem]">
          <h2>About</h2>
          <h2>Portfolio</h2>
          <h2>Projects</h2>
          <h2>Testimonial</h2>
          <button className="px-5 py-1 tracking-tighter text-white rounded-full bg-gradient-to-bl from-[#0BE4CC] to-sky-500">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}
export default NavBar;
