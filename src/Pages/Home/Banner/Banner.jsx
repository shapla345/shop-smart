// // // Banner.jsx
// // import "react-responsive-carousel/lib/styles/carousel.min.css"; // import 
// // // carousel styles
// // // var React = require('react');
// // // var ReactDOM = require('react-dom');
// // // var Carousel = require('react-responsive-carousel').Carousel;


// // import { Carousel } from "react-responsive-carousel";
// // import banner1 from '../../../assets/bannar/benner.jpg';
// // import banner2 from '../../../assets/bannar/Rectangle 1.png';
// // import banner3 from '../../../assets/bannar/Rectangle 1.png';

// // const Banner = () => {
// //   return (
// //      <div className="h-50%"> 
// //         <Carousel  className="h-1/2 border-2 border-blue-200 max-h-none">
// //                 <div>
// //                     <img className="h-1/2" src={banner1}/>
// //                     <p className="legend">Image 1</p>
// //                 </div>
                
// //                 <div>
// //                     <img className="h-1/2" src={banner2}/>
// //                     <p className="legend">Image 2</p>
// //                 </div>
// //                 <div >
// //                     <img className="h-1/2" src={banner3} />
// //                     <p className="legend">Image 3</p>
// //                 </div>
// //             </Carousel></div>
   
// //   );
// // };

// // export default Banner;


// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import { Carousel } from "react-responsive-carousel";
// // import banner1 from "../../../assets/bannar/benner.jpg";
// // import banner2 from "../../../assets/bannar/Rectangle 1.png";
// // import banner3 from "../../../assets/bannar/Rectangle 1.png";

// // const Banner = () => {
// //   return (
// //     <div className="max-w-6xl mx-auto mt-10">
// //       <Carousel
// //         autoPlay
// //         infiniteLoop
// //         showThumbs={false}
// //         showStatus={false}
// //         showArrows={true}
// //         swipeable={true}
// //         emulateTouch={true}
// //         interval={3000}
// //         transitionTime={800}
// //       >
// //         <div>
// //           <img
// //             src={banner1}
// //             alt="Banner 1"
// //             className="w-full h-[400px] md:h-[500px] object-contain rounded-md"
// //           />
// //         </div>
// //         <div>
// //           <img
// //             src={banner2}
// //             alt="Banner 2"
// //             className="w-full h-[400px] md:h-[500px] object-contain rounded-md"
// //           />
// //         </div>
// //         <div>
// //           <img
// //             src={banner3}
// //             alt="Banner 3"
// //             className="w-full h-[400px] md:h-[500px] object-contain rounded-md"
// //           />
// //         </div>
// //       </Carousel>
// //     </div>
// //   );
// // };

// // export default Banner;


// // Banner.jsx


// //chat gpt


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../../assets/bannar/benner.jpg";
import banner2 from "../../../assets/bannar/benner1.jpg";
import banner3 from "../../../assets/bannar/benner2.jpg";

const Banner = () => {
  return (
    <div className=" max-w-screen-xl mx-auto mt-32">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
        interval={3000}
        transitionTime={800}
      >
        {[banner1, banner2, banner3].map((banner, index) => (
          <div
            key={index}
            className=" flex justify-center items-center h-[400px] md:h-[500px] w-full"
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="h-full max-w-full  w-100% object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

// //video banner

// import React from "react";
// import Image1 from "../../../assets/women/women2.jpg";
// import Image2 from "../../../assets/hero/shopping.png";
// import Image3 from "../../../assets/hero/sale.png";
// import Slider from "react-slick";

// const ImageList = [
//   {
//     id: 1,
//     img: Image1,
//     title: "Upto 50% off on all Men's Wear",
//     description:
//       "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     img: Image2,
//     title: "30% off on all Women's Wear",
//     description:
//       "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     img: Image3,
//     title: "70% off on all Products Sale",
//     description:
//       "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// const Banner = () => {
//   var settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 800,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     cssEase: "ease-in-out",
//     pauseOnHover: false,
//     pauseOnFocus: true,
//   };

//   return (
//     <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
//       {/* background pattern */}
//       <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
//       {/* hero section */}
//       <div className="container pb-8 sm:pb-0">
//         <Slider {...settings}>
//           {ImageList.map((data) => (
//             <div>
//               <div className="grid grid-cols-1 sm:grid-cols-2">
//                 {/* text content section */}
//                 <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
//                   <h1
//                     data-aos="zoom-out"
//                     data-aos-duration="500"
//                     data-aos-once="true"
//                     className="text-5xl sm:text-6xl lg:text-7xl font-bold"
//                   >
//                     {data.title}
//                   </h1>
//                   <p
//                     data-aos="fade-up"
//                     data-aos-duration="500"
//                     data-aos-delay="100"
//                     className="text-sm"
//                   >
//                     {data.description}
//                   </p>
//                   <div
//                     data-aos="fade-up"
//                     data-aos-duration="500"
//                     data-aos-delay="300"
//                   >
//                     <button
//                       //onClick={handleOrderPopup}
//                       className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
//                     >
//                       Order Now
//                     </button>
//                   </div>
//                 </div>
//                 {/* image section */}
//                 <div className="order-1 sm:order-2">
//                   <div
//                     data-aos="zoom-in"
//                     data-aos-once="true"
//                     className="relative z-10"
//                   >
//                     <img
//                       src={data.img}
//                       alt=""
//                       className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Banner;




//chat gpt pondit

// src/components/Banner.jsx

// import React from "react";
// import Slider from "react-slick";

// // slick-carousel CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // ডেমো ইমেজ (তুমি চাইলে তোমার ইমেজ এখানে বসাতে পারো)
// import banner1 from "../../../assets/women/women2.jpg";
// import banner2 from "../../../assets/women/women1.jpg";
// import banner3 from "../../../assets/women/women.jpg";

// const Banner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-4">
//       <Slider {...settings}>
//         {[banner1, banner2, banner3].map((img, i) => (
//           <div key={i} className="rounded-lg overflow-hidden">
//             <img
//               src={img}
//               alt={`Banner ${i + 1}`}
//               className="w-full h-[400px] object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Banner;


