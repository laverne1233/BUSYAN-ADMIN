import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import accountVerificationImage from './assets/accountVerificationImage.png'; 
import managePeopleImage from './assets/managePeopleImage.png'; 

const People = () => {
    const [showAccountVerification, setShowAccountVerification] = useState(true); // Set to true
    const [showManageStaff, setShowManageStaff] = useState(false); // Set to false

    const toggleAccountVerification = () => {
        setShowAccountVerification(true);
        setShowManageStaff(false);
    };

    const toggleManageStaff = () => {
        setShowAccountVerification(false);
        setShowManageStaff(true);
    };

    return (
        <div>
            <p className="bus-heading">Manage People</p>
            <p className="bus-heading2">Verify bus driver's accounts and manage their data</p>
            
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <FaSearch />
                </div>
            </div>
            <div className="button-container">
                <button
                    className={showAccountVerification ? 'active-button' : 'inactive-button'}
                    onClick={toggleAccountVerification}
                >
                    Account Verification
                </button>
                <button
                    className={showManageStaff ? 'active-button' : 'inactive-button'}
                    onClick={toggleManageStaff}
                >
                    Manage Staff
                </button>
            </div>
            <div className="image-container">
                {showAccountVerification && <img src={accountVerificationImage} alt="Account Verification" className="image" />}
                {showManageStaff && <img src={managePeopleImage} alt="Manage Staff" className="image"/>}
            </div>
        </div>
    );
};

export default People;

