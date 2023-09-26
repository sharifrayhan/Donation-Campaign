import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const [card, setCard] = useState()
    const getIdObject = useParams();
    const {id} = getIdObject
    const cards = useLoaderData()

    useEffect(()=>{
        const findCard = cards?.find(card=>card.id==id)
    },[id,cards])

    return (
        <div>
            
        </div>
    );  
};

export default Details;