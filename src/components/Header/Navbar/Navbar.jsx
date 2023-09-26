import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center mx-20 my-3'>
                <img src="/src/images/Logo.png" alt="" />
                <div>
                    <ul className='flex gap-5 cursor-pointer  '>
                        <li className="hover:text-[#FF444A] hover:underline"><Link to="/" >Home</Link></li>
                        <li className="hover:text-[#FF444A] hover:underline"><Link to="/Donation">Donation</Link></li>
                        <li className="hover:text-[#FF444A] hover:underline"><Link to="/Statistics">Statistics</Link></li>  
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;