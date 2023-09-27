import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DCards = ({value}) => {
    return (
<div className=" w-[300px] md:w-[495px] lg:w-[595px] shadow-xl flex rounded-lg bg-base-100 cursor-pointer " style={{backgroundColor: value?.theme_color}}>
      <div className="  ">
        <img className="rounded-l-lg h-[140px] w-[290px] md:h-[160px] md:lg:w-[310px] lg:h-[160px] lg:w-[350px]" src={value?.cover_img}alt="Image Loading"/>
      </div>
      <div className="p-3 w-full">
        <button className="px-2 py-1 mb-2 rounded-lg text-xs md:text-sm lg:text-sm	" style={{backgroundColor: value?.category_bg_color, color: value?.card_title_color}}>{value?.category}</button>
        <h2 className=" font-semibold text-sm md:text-base lg:text-base mb-1" >{value?.card_title}</h2>
        <p className=' mb-2' style={{color: value?.card_title_color}} >{value?.price}</p>
        <button className="btn btn-xs md:btn-sm lg:btn-sm text-white" style={{backgroundColor: value?.card_title_color}}><Link to={`/details/${value?.id}`}>View Details</Link></button>
      </div>
    </div>
    
    );
};

DCards.propTypes ={
  value: PropTypes.object,
}
export default DCards;