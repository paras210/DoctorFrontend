// src/components/Profile.js

import React, { useState, useEffect } from 'react';
import { authHeader } from '../utils/authHeader';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...authHeader(),
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {profileData ? (
        <div>
          <p>Username: {profileData.userName}</p>
          <p>Email: {profileData.email}</p>
          {/* Add other profile fields here */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
