import React, { useState, useEffect } from 'react';
import { fetchWithAuth } from '../utils/fetchWithAuth';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await fetchWithAuth('http://192.168.210.225:8080/api/user/profile', {
          method: 'GET',
        });

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
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;