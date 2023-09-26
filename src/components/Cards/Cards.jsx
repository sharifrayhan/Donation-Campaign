import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({cards}) => {

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
      {
        cards?.map(card=> <Card key={card.id} card={card}></Card>)
      }
    </div>
  );
};

Cards.propTypes ={
  // map: PropTypes.func,
}

export default Cards;
