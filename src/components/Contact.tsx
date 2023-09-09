function Contact() {
  return (
    <>
      <div className="md:px-36 flex px-6 justify-center gap-[3rem] flex-col md:flex-row ">
        <div className="flex flex-col md:w-7/12 gap-10">
          <h1 className="header">Contact</h1>
          <p className="font-normal flex-col md:px-16">
            <span>
              I am Rediet Dagne an Architect and A Graphics Designer ready for
              hiring contact me for any kind of job and more info
            </span>
            <div className="font-normal md:px-24 flex flex-col gap-3">
              {" "}
              <a
                href="http://redietdagne@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block">
                  <i className="fa-regular fa-envelope"></i>
                  <h1 className="inline-block px-2">redietdagne@gmail.com</h1>
                </span>
              </a>
              <span className="block">
                <i className="fa-brands fa-instagram"></i>
                <h1 className="inline-block px-2">@rediet_dagne</h1>
              </span>
              <span className="block">
                <i className="fa-brands fa-telegram"></i>
                <h1 className="inline-block px-2">redietdagne@gmail.com</h1>
              </span>
              <span className="block">
                <i className="fa-brands fa-linkedin"></i>
                <h1 className="inline-block px-2">redietdagne@gmail.com</h1>
              </span>
            </div>
          </p>
        </div>
        <div className="md:mt-10 md:w-6/12 flex font-normal flex-col gap-5">
          <input
            type="text"
            className="placeholder:font-normal  bg-[#0C2A36] rounded-md"
            placeholder="mail@gmail.com"
          />
          <input
            type="text"
            className="placeholder:font-normal  bg-[#0C2A36] rounded-md"
            placeholder="mail@gmail.com"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            className=" resize-none  bg-[#0C2A36] rounded-md"
          ></textarea>
          <button className="bg-gradient-to-tl from-[#0BE4CC] to-sky-500 w-full hover:bg-transparent py-2 px-6 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Contact;
