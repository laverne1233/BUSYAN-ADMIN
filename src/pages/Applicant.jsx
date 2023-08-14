import React from 'react';
import { FaSearch } from 'react-icons/fa';
import applicantImage from './assets/applicantImage.png'; 

const Applicant = () => {
    return (
        <div>
            <p className="bus-heading">Applicants</p>
            <p className="bus-heading2">Hire new applicants</p>
            
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <FaSearch />
                </div>
            </div>
            <div className="bus-image">
                <img src={applicantImage} alt="Applicant" />
            </div>
        </div>
    );
};

export default Applicant;