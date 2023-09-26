import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Cards = () => {
//   const cards = useLoaderData();
//   console.log(cards);
const [cards, setCards]=useState([])
useEffect(()=>{
    fetch('courses.json')
    .then(res=> res.json())
    .then(data=> setCards(data))
},[])
  return (
    <p>Hello this is cards section</p>
  );
};

export default Cards;
