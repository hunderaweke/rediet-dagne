function Testimonials() {
  return (
    <>
      <h1 className="header w-full text-center">Testimonials</h1>
      <div className="m-auto w-11/12 py-9 flex flex-wrap justify-center gap-5">
        <Testimonial
          name="Rediet Dagne"
          profession={"UI/UX Designer"}
          photo={"professional-1.jpg"}
          testimony={
            "Rediet is one of the best achitects in this time with modern design skills and creativity"
          }
        />
        <Testimonial
          name="Wendirad Demelash"
          photo={"professional-2.png"}
          profession={"Graphics Designer"}
          testimony={
            "Rediet is one of the best achitects in this time with modern design skills and creativity"
          }
        />{" "}
        <Testimonial
          name="Nardos"
          profession={"Web developer"}
          photo={"professional-2.png"}
          testimony={
            "Rediet is one of the best achitects in this time with modern design skills and creativity"
          }
        />
        <Testimonial
          name="Hundera Aweke"
          profession={"Architect"}
          photo={"professional-1.jpg"}
          testimony={
            "Rediet is one of the best achitects in this time with modern design skills and creativity sdjhsj dhsjd hjskd hkjshdkjshdk jshdk jshdjshk djhskjdhskdh"
          }
        />
        <Testimonial
          name="Nardos"
          profession={"Web developer"}
          photo={"professional-2.png"}
          testimony={
            "Rediet is one of the best achitects in this time with modern design skills and creativity"
          }
        />
      </div>
    </>
  );
}
function Testimonial(props: {
  name: string;
  photo: string;
  testimony: string;
  profession: string;
}) {
  return (
    <>
      <div className="font-normal flex  gap-5 bg-[#0C2A36] p-3 rounded-md w-[23rem]">
        <div className="ratio-1x1 w-24 max-h-24 rounded-full overflow-clip shadow-[#0be4cb85] shadow-[0px_0px_25px_2px]">
          <img
            className="ratio-1x1 object-cover rounded-full"
            src={props.photo}
            alt=""
          />
        </div>
        <div className="text-sm w-8/12 h-auto">
          <h1 className="font-bold">{props.name}</h1>
          <span className="font-extralight opacity-60">{props.profession}</span>
          <p className="italic break-words">"{props.testimony}"</p>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
