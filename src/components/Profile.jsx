import React from "react";
import book from '../assets/frank.jpg';

const Profile = () => {
  const profileData = {
    name: "Frank Elijah Otieno",
    alias: "Stateske",
    bio: "The success of Frank Elijah Otieno (Stateske) is the result of a unique blend of knowledge, risk management, psychological resilience, and adaptability. His ability to navigate the complexities of both the crypto and forex markets, turning them into profitable ventures, highlights how mastering these elements can empower a trader to thrive in today’s fast-evolving financial environment.",
    image: "profile-picture.jpg" // Replace with your actual image path
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={book} alt={profileData.name} className="profile-image" />
        <div className="profile-content">
          <h1 className="profile-name">{profileData.name}</h1>
          <h2 className="profile-alias">({profileData.alias})</h2>
          <p className="profile-bio">{profileData.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
