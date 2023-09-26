import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col justify-between items-center my-10 gap-4">
        <h1 className="font-bold text-4xl">I Grow By Helping People In Need</h1>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-error">
              Search
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;