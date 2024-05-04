import React, { useState } from 'react';
import mumbaiImage from './image/mumbai.jpg'; 
import quebecImage from './image/quebec.jpg';
import bangkokImage from './image/bangkok.jpg';
import spainImage from './image/spain.jpg';
import tokyoImage from './image/tokyo.jpg';

const ExpandingCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="container">
            <div
                className={`inner-container ${activeIndex === 0 ? 'active' : ''}`}
                id="inner-container-1"
                onClick={() => handleCardClick(0)}
                style={{ backgroundImage: `url(${mumbaiImage})` }}
            >
                <h3>Mumbai</h3>
            </div>
            <div
                className={`inner-container ${activeIndex === 1 ? 'active' : ''}`}
                id="inner-container-2"
                onClick={() => handleCardClick(1)}
                style={{ backgroundImage: `url(${quebecImage})` }}
            >
                <h3>Quebec</h3>
            </div>
            <div
                className={`inner-container ${activeIndex === 2 ? 'active' : ''}`}
                id="inner-container-3"
                onClick={() => handleCardClick(2)}
                style={{ backgroundImage: `url(${bangkokImage})` }}
            >
                <h3>Bangkok</h3>
            </div>
            <div
                className={`inner-container ${activeIndex === 3 ? 'active' : ''}`}
                id="inner-container-4"
                onClick={() => handleCardClick(3)}
                style={{ backgroundImage: `url(${spainImage})` }}
            >
                <h3>Spain</h3>
            </div>
            <div
                className={`inner-container ${activeIndex === 4 ? 'active' : ''}`}
                id="inner-container-5"
                onClick={() => handleCardClick(4)}
                style={{ backgroundImage: `url(${tokyoImage})` }}
            >
                <h3>Tokyo</h3>
            </div>
        </div>
    );
};

export default ExpandingCard;
