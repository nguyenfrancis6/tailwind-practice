import React from "react";
import { Carousel } from "flowbite-react";
import charizard from "../assets/charizard.png";
import greninja from '../assets/greninja.jpg'
import pikachu from '../assets/pikachu.jpg'

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 my-28 md:my-8 py-12">
            <div>
              <img src={charizard} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Pokemon From Your{" "}
                <span className="text-brandPrimary">Favorite Shows</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Watch your Fan Favorites!
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 my-28 md:my-8 py-12">
            <div>
              <img src={pikachu} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                All Episodes are Available{" "}
                <span className="text-brandPrimary">in HD</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                High Quality Perforance
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 my-28 md:my-8 py-12">
            <div>
              <img src={greninja} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Relive the {" "}
                <span className="text-brandPrimary">Best Moments</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Watch on demand now!
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
