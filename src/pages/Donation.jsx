import {  useState } from "react";
import DCards from "../components/Donation Cards/DCards";


const Donation = () => {
        const [cardsShow, setCardsShow] = useState(4);

        const handleSeeAll = () => {
            setCardsShow(values.length);
          };
        
        let length = localStorage.length
        let values = [];
        for (let i = 0; i < length; i++) {
            const key = localStorage.key(i);
            const getValue = localStorage.getItem(key);
            values.push( JSON.parse(getValue)) 
         
          }
        if (length==0){
            return (
                <div className=" h-screen flex flex-col items-center gap-3">
                    <img className=" w-[200px]" src="https://i.ibb.co/vX2ghKZ/sad.png" alt="" />
                    <p className=" font-extrabold text-3xl">No New Donations</p>
                </div>
            
            )
        }
   

    return (
        <div className="flex flex-col items-center">
          <div className="grid items-center grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 mx-3 md:mx-20 lg:mx-20">
            {values.slice(0, cardsShow).map((value) => (
              <DCards key={value.id} value={value}></DCards>
            ))}
          </div>
          {cardsShow < values.length && (
            <button onClick={handleSeeAll} className="btn btn-primary my-3">
              See All
            </button>
          )}

        </div>
      );
};

export default Donation;