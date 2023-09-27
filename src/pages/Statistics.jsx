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
      { name: `Your Donation`, value: x },
      { name: `Total Donation `, value: y },
    ];

  

  const colors = ['#00C49F', '#FF444A'];
  return (
    <div className=" grid items-center justify-center ">
     
      <PieChart className=' ' width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          outerRadius={90}
          
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
            // Customize label style here
            const labelStyle = {
              fontSize: '14px', // Adjust the text size as needed
              fill: colors[index],
            };
      
            // Format the value to include '%' icon
            const formattedValue = `${value}%`;
      
            return (
              <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={labelStyle}>
                {formattedValue}
              </text>
            );
          }}
        >
          

          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
 
    </div>
  );
};

export default SimplePieChart;

