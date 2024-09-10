import React, { useEffect, useState } from 'react';

const DoctorList = () => {
  const [data, setData] = useState([]); // State to hold the array of specializations
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch data from the API
    fetch('http://192.168.75.225:8080/api/specializations')
      .then(response => response.json()) // Parse response as JSON
      .then(result => {
        setData(result); // Store the result (array) in state
        console.log(result);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading stops if there's an error
      });
  }, []); // Empty dependency array to run only once on component mount

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is fetched
  }

  return (
    <div>
      <h1>Doctor Specializations</h1>
      <ul>
        {data.map((specialization, index) => (
          <li key={index}>{specialization.replace(/_/g, ' ')}</li> // Render each specialization in the list
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
