import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-gray-700">
      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">SQ Health<span className="text-secondary">Care</span></h3>
          <p>We are honored to be part of your healthcare journey and committed to delivering compassionate, personalized care.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">About Us</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Work With Us</p>
          <p>Our Blog</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">Services</h4>
          <p>Search Terms</p>
          <p>Advance Search</p>
          <p>Privacy Policy</p>
          <p>Suppliers</p>
          <p>Our Stores</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary mb-2">Contact Us</h4>
          <p><i className="ri-map-pin-2-fill"></i> 41, Madina colony lahore</p>
          <p><i className="ri-mail-fill"></i> info@care.com</p>
          <p><i className="ri-phone-fill"></i> (+92) 326-5307342</p>
        </div>
      </div>
      <div className="bg-primary text-white p-4 text-center mt-4">
        Copyright © 2025 SQ Health-Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

