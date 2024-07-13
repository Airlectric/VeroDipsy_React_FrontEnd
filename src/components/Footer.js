import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-auto container-fluid" style={{
      background: 'linear-gradient(90deg, rgb(6, 28, 68) 0%, rgba(52, 154, 185, 0.8) 100%)',
      color: 'white'
    }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center text-md-left">
          &copy; 2024 Verodipsy Beads and Clothing. All rights reserved.
        </div>
        <div className="col-12 col-md-6 text-center text-md-right">
          {/* Add social media links */}
          <a href="https://www.facebook.com/veronicaositasiakie24" className="text-white me-2">Facebook</a>
          <a href="https://www.instagram.com/verodipsybeads?igsh=YzljYTk1ODg3Zg==" className="text-white me-2">Instagram</a>
          <a href=" https://www.tiktok.com/@veronicaosita" className="text-white">TikTok</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
