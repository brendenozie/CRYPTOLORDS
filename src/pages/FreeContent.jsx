import React from "react";

const FreeContent = () => {
  return (
     <div className="exclusive-container">
      <div className="content-card">
        <h1 className="title">🌟 Welcome  🌟</h1>
        <p className="description">Thank you for your engaging with us! You now have access to our free resources.</p>
        
        <div className="content-section">
          <h2>🎬 Free Videos</h2>
          <div className="video-wrapper">
            <video controls>
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="content-section">
          <h2>📖 Free Curated Content</h2>
          <p>Enjoy carefully curated .</p>
          <a href="/" className="access-button">Enjoy</a>
        </div>
      </div>
    </div>
  );
};

export default FreeContent;
