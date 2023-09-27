import { length } from "localforage";
import { useEffect, useState } from "react";
import DCards from "../components/Donation Cards/DCards";


const Donation = () => {
    const [items, setItems] = useState()
    
    
    // useEffect(()=>{
        
        let length = localStorage.length
        let values = [];
        for (let i = 0; i < length; i++) {
            const key = localStorage.key(i);
            const getValue = localStorage.getItem(key);
            values.push( JSON.parse(getValue)) 
            // setItems(value)
          }
          
    // },[length])

    return (
       <div className=" flex flex-col items-center">
            <div className=" grid items-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 mx-20 ">
         {
             values.map(value=> <DCards key={value.id} value={value} ></DCards>)

            }
     
        </div>
        <button className='btn btn-primary my-3 '>See All</button>
       </div>

    );
};

export default Donation;