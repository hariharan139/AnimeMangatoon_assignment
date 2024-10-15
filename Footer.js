// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        We are dedicated to bringing you the best webtoon experiences with engaging stories and characters. 
                        Join us on this exciting journey!
                    </p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto: contact@AnimeMangaToon.com"> contact@AnimeMangaToon.com</a></p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Webtoon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
