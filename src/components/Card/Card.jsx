import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    id,
    cover_img,
    theme_color,
    category,
    category_bg_color,
    category_title_color,
    card_title,
    card_title_color,
    description,
    price,
  } = card;

  return (
    <Link to={`/details/${id}`}>
    <div className=" w-[280px] shadow-xl rounded-lg bg-base-100 cursor-pointer " style={{backgroundColor: theme_color}}>
      <div className="">
        <img className="rounded-t-lg h-[180px] w-[280px]"
          src={cover_img}
          alt="Image Loading"
        />
      </div>
      <div className="p-3">
        <button className="px-2 py-1 mb-2 rounded-lg font-medium" style={{backgroundColor: category_bg_color}}>{category}</button>
        <h2 className=" font-semibold " style={{color: card_title_color}}>{card_title}</h2>
      </div>
    </div>
    </Link>
  );
};

export default Card;
