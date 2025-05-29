import React from "react";
import BannerImg from "../../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Offer = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12  sm:py-0 mx-10 md:mx-5 sm:my-20 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[500px] h-[450px] w-full mx-auto drop-shadow-[-10px_10px] object-cove rounded-2xl"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-4xl sm:text-4xl font-bold text-blue-700">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-900 tracking-wide leading-5 lg:max-w-md"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p className="text-gray-900">Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p className="text-gray-900">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-gray-900">Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p className="text-gray-900">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
