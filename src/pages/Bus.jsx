import React from 'react';
import { FaSearch } from 'react-icons/fa';
import busImage from './assets/manageBusImage.png'; // Import your image

const Bus = () => {
    return (
        <div>
            <p className="bus-heading">Manage Bus</p>
            <p className="bus-heading2">Add bus and their routes</p>
            
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <FaSearch />
                </div>
            </div>
            <div className="bus-image">
                <img src={busImage} alt="Bus" />
            </div>
        </div>
    );
};

export default Bus;
