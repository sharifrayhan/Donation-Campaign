import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const SimplePieChart = () => {
    const [cards, setCards]=useState([])
    useEffect(()=>{
        fetch('donation_info.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[cards])
  
    let lengthCards = cards.length;
    let lengthLocalStorage = localStorage.length;
 
 
    const yourDonationPercentage = ((lengthLocalStorage / lengthCards) * 100).toFixed(1);
    const totalDonationPercentage = (100 - yourDonationPercentage).toFixed(1);

    const x = parseFloat(yourDonationPercentage)
    const y = parseFloat(totalDonationPercentage)
  
    const data = [
      { name: `Your Donation (${yourDonationPercentage}%)`, value: x },
      { name: `Total Donation (${totalDonationPercentage}%)`, value: y },
    ];

  

  const colors = ['#00C49F', '#FF444A'];
  return (
    <div className=" grid items-center justify-center ">
      <div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          outerRadius={100}
          
          label
        >
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      </div>
    </div>
  );
};

export default SimplePieChart;
