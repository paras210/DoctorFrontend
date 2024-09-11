import React, { useState, useEffect } from 'react';
import { authHeader } from '../utils/authHeader';
import Spinner from 'react-bootstrap/Spinner';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://medilocate-2-0.onrender.com/api/user/profile', {
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
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div>
          <p>Username: {profileData.userName}</p>
          <p>Email: {profileData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
