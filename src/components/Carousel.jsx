import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FlippingCard from "./FlippingCard";
import './Carousel.css';
import carPic1 from '../assets/carPic1.svg'
import carPic2 from '../assets/carPic2.svg'

const Data =()=>{
    return(
        <>
        <div style={{fontFamily:'Poppins', fontWeight:600, fontSize:'15px', lineHeight:'25px',verticalAlign:"middle", display:'flex', flexDirection:'column'}}>
            <p><span style={{color:'#000000'}}> Activity Name : </span> outreach activities </p>
            <p><span style={{color:'#000000'}}>Activity Date : </span>  02/2/25</p>
            <p><span style={{color:'#000000'}}>No. of Participants : </span>  34</p>
            <p><span style={{color:'#000000'}}>Remarks  : </span>   By IRCA’s</p>
        </div>
        </>
    )
  } 

const Carousel = () => {
  const slides = [
    { frontImage: carPic1, backContent: <Data /> },
    { frontImage: carPic2, backContent: <Data /> },
    { frontImage: carPic1, backContent: <Data /> },
    { frontImage: carPic2, backContent: <Data /> },
    { frontImage: carPic1, backContent: <Data /> }
  ];

  

  return (
    <Swiper
      slidesPerView={3}
      pagination={{ clickable: true }} // Enable pagination
      modules={[Pagination]} // Include pagination module
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <FlippingCard frontImage={slide.frontImage} backContent={slide.backContent} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import FlippingCard from "./FlippingCard";

// const Carousel = () => {
//     const slides = [
//         { frontImage: "https://via.placeholder.com/250x300", backContent: "Slide 1" },
//         { frontImage: "https://via.placeholder.com/250x300", backContent: "Slide 2" },
//         { frontImage: "https://via.placeholder.com/250x300", backContent: "Slide 3" },
//       ];

//   return (
//     <Swiper spaceBetween={20} slidesPerView={3} navigation>
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <FlippingCard frontImage={slide.frontImage} backContent={slide.backContent} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;
