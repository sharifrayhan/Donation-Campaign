import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import { useState, useEffect } from 'react';


const Home = () => {
  const cards = useLoaderData()

  const [searchCategory, setSearchCategory] = useState('');
  const filteredCards = cards.filter((card) =>
    card.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

    return (
      <div>
        <Banner searchCategory={searchCategory} setSearchCategory={setSearchCategory} ></Banner>
            <div className="mx-2 md:mx-24 lg:mx-20 my-3">
        
        <Cards cards={filteredCards}></Cards>
    </div>
      </div>
  );
};

export default Home;
