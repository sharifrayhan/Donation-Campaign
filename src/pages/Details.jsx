import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";




const Details = () => {
   
    const [topic, setTopic] = useState()
    const getIdObject = useParams();
    const {id} = getIdObject
    const cards = useLoaderData()

    useEffect(()=>{
        const findCard = cards?.find(card=>card.id==id)
        setTopic(findCard)
        
    },[id, cards]);

    // const  [animation, setAnimation] = useState()
    // useEffect(()=>{
    //     fetch('green_tick.json')
    //     .then(res=> res.json())
    //     .then(data=> console.log(data))
        
    // },[]);

    const handleAddToStorage = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank You For Your Donation!',
            text: 'Your kindness and generosity are truly appreciated. Your donation is a powerful reminder that together, we can create a better future.',
            showConfirmButton: false,
            timer: 2200
          })
        

        localStorage.setItem(`${ Date.now()}`,JSON.stringify(topic))
    }
    // const {cover_img,card_title,description,card_title_color,price} = topic;
    // console.log(card_title_color)
    
    return (
        <div className='mx-2 md:mx-24 lg:mx-20 my-4'>
            <div className='relative'>
            <img className='rounded-lg w-full' src={topic?.cover_img} alt="" />
            <div className='absolute bottom-0 rounded-b-lg bg-black/80 w-full p-2 md:p-6 lg:p-7 '>
                <button onClick={handleAddToStorage} className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md text-white" style={{backgroundColor: topic?.card_title_color}}>Donate {topic?.price}</button>
            </div>
            </div>
            <h1 className='font-bold text-xl md:text-3xl lg:text-4xl my-5'>{topic?.card_title}</h1>
            <p className=' text-[#545454]'>{topic?.description}</p>
       
        </div>
    );  
};

export default Details;