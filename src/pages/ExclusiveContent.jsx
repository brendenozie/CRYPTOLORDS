import React from "react";

const ExclusiveContent = () => {
  return (
     <div className="exclusive-container">
      <div className="content-card">
        <h1 className="title">🌟 Welcome to Exclusive Content 🌟</h1>
        <p className="description">Thank you for your payment! You now have access to premium resources tailored just for you.</p>
        
        <div className="content-section">
          <h2>🎬 Premium Videos</h2>
          <div className="video-wrapper">
            <video controls>
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="content-section">
          <h2>📖 Exclusive ON DISCORD</h2>
          <p>Enjoy carefully curated .</p>
          <a href="/" className="access-button">JOIN Now</a>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveContent;
