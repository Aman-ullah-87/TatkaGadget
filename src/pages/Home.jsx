import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="bg-gray-200 pb-40">
      <div className=" text-center">
        <h1 className=" pt-20  animate-text bg-gradient-to-r from-[#22d3ee] via-purple-500 to-[#22d3ee] bg-clip-text text-transparent font-black  lg:text-6xl ">
          Welcome To TatkaGadget
        </h1>
        <p className="my-6 text-center text-xs sm:text-base md:text-lg text-gray-900">
          {" "}
          Best E-commerce platform for buying high quality Smart Home <br />{" "}
          Appliances at extremely affordable Price.
        </p>
      </div>
      <div className="flex gap-6 justify-center">
        <Link to='/shop'>
          <button className=" btn hover:bg-cyan-400 bg-cyan-200 border-2 border-cyan-200 hover:border-cyan-400  lg:px-8 lg:py-3">Shop Now</button>
        </Link>
        <Link>
          <button className="btn hover:bg-cyan-400 border-2 border-cyan-200 hover:border-cyan-400">Learn More</button>
        </Link>
      </div>
      </div>
      <img src="/src/assets/images/hero-bf3d5e6d.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 lg:-mt-20 rounded-lg shadow-md bg-gray-500" />
    </div>
  );
};

export default Home;
