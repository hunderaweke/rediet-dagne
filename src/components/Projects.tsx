import { Pagination, Autoplay, Parallax, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./pagination.css";
function Projects() {
  return (
    <>
      <h1 className="font-brand text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-lime-400">
        Projects
      </h1>
      <Swiper
        className="w-full px-36 py-20"
        modules={[Pagination, Autoplay, Parallax, Mousewheel]}
        parallax={{ enabled: true }}
        mousewheel={true}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={50}
      >
        <SwiperSlide className="bg-gradient-to-r from-sky-500 to-lime-400 rounded-md w-20 h-80 p-0.5">
          <div className="bg-[#0C2A36] w-full h-full rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-sky-500 to-lime-400 rounded-md w-20 h-80 p-0.5">
          <div className="bg-[#0C2A36] w-full h-full rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-sky-500 to-lime-400 rounded-md w-20 h-80 p-0.5">
          <div className="bg-[#0C2A36] w-full h-full rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-sky-500 to-lime-400 rounded-md w-20 h-80 p-0.5">
          <div className="bg-[#0C2A36] w-full h-full rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-sky-500 to-lime-400 rounded-md w-20 h-80 p-0.5">
          <div className="bg-[#0C2A36] w-full h-full rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-sky-500 to-lime-400 rounded-md w-20 h-80 p-0.5">
          <div className="bg-[#0C2A36] w-full h-full rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-sky-500 to-lime-400 rounded-md w-20 h-80 p-0.5">
          <div className="bg-[#0C2A36] w-full h-full rounded-md"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Projects;