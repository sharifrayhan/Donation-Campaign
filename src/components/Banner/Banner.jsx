import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col justify-between items-center my-10 gap-4">
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">I Grow By Helping People In Need</h1>
        <div className="form-control">
          <div className="input-group items-center">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered h-[25px] md:h-[31px] lg:h-[48px] w-[180px] md:w-[240px] lg:w-[300px]"
            />
            <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md bg-[#FF444A] text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;