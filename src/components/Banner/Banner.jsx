
const Banner = ({ searchCategory, setSearchCategory }) => {
  // const sectionBg = {
  //   backgroundImage: 'url("/src/images/donation_cover.jpg")',
  //   opacity: 0.5,
  //   width: '100%',
  //   height: '300px',
  //   backgroundSize: 'cover',
  // };
  
  return (
        <div className="flex flex-col justify-center h-[70vh] items-center mb-10 gap-4 bg-[url('./images/donation_cover.jpg')] bg-opacity-50  w-full  bg-cover bg-center bg-no-repeat"  >
        <h1 className="font-bold text-lg md:text-3xl lg:text-4xl">I Grow By Helping People In Need</h1>
        <div className="form-control">
          <div className="input-group items-center">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered h-[25px] md:h-[31px] lg:h-[48px] w-[180px] md:w-[240px] lg:w-[300px]"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
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