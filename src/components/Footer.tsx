function Footer() {
  return (
    <>
      <div className="font-normal text-xs md:text-sm h-20 flex flex-col justify-center items-center mt-10 w-full bg-[#0C2A36]">
        <span className="flex gap-5 text-xl">
          <a href="https://github.com/hunderaweke">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://t.me/hun_era">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="https://linkedin.com/in/hundera-awoke">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/hunderaaweke">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </span>
        <span>
          2023 Copyright &copy reserved. Developed by{" "}
          <a
            href="https://hunderaweke.github.io"
            target="_blank"
            className="text-sky-500"
          >
            Hundera Awoke
          </a>
        </span>
      </div>
    </>
  );
}
export default Footer;
