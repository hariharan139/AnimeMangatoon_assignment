import React from 'react';
import './CTAButton.css';
import { Link } from 'react-router-dom';

const CTAButton = () => {
    return (
        <div className="cta-container">
            <Link to="/read-more" className="cta-button">
                Read More About the Webtoon
            </Link>
        </div>
    );
};

export default CTAButton;
