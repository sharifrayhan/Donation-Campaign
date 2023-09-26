import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";


const Home = () => {
  const cards = useLoaderData()
    return (
    <div className="mx-2 md:mx-24 lg:mx-20 my-3">
        <Banner></Banner>
        <Cards cards={cards}></Cards>
    </div>
  );
};

export default Home;
