import React from 'react';
import './ProfileCard.css';
import avatarUrl from '../assets/male.png';

const ProfileCardFn = () => {
    return (
        <div className="profile-card">
            <img src={avatarUrl} alt="User Avatar" className="profile-avatar" />
            <h3 className="profile-name">Dhanavel</h3>
            <p>Frontend Developer</p>
        </div>
    );
};

export default ProfileCardFn;
