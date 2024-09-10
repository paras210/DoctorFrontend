import React, { useState, useEffect, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const DoctorSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [locationAccess, setLocationAccess] = useState(false);
    const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null });
    const navigate = useNavigate();

    const fetchDoctors = useCallback(debounce(async (searchTerm, page) => {
        setLoading(true);

        // Build the query string dynamically
        let queryParams = `name=${searchTerm}&page=${page}&size=10`;
        if (locationAccess && userLocation.latitude && userLocation.longitude) {
            queryParams += `&userLatitude=${userLocation.latitude}&userLongitude=${userLocation.longitude}`;
        }

        const response = await fetch(`http://192.168.75.225:8080/api/doctors/search?${queryParams}`);
        const data = await response.json();

        // Assuming the response includes pagination info
        setDoctors(data.doctors); // Adjust based on actual response structure
        setTotalPages(data.totalPages); // Adjust based on actual response structure
        setLoading(false);
        console.log("QUERY  " + queryParams);
    }, 1000), [locationAccess, userLocation]);

    useEffect(() => {
        if (searchTerm) {
            fetchDoctors(searchTerm, page);
        }
    }, [searchTerm, page, fetchDoctors]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setPage(1); // Reset to first page on new search
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleLocationAccess = () => {
        setLocationAccess(!locationAccess);
        // You can also fetch and set user location here if needed
    };

    useEffect(() => {
        // Example of setting user location (can be replaced with actual geolocation logic)
        if (locationAccess) {
            // Mock location for demonstration
            setUserLocation({
                latitude: 29.250062,
                longitude: 77.009861
            });
        }
    }, [locationAccess]);
    const handleDoctorClick = (doctorId) => {
        navigate(`/doctor/${doctorId}`); // Navigate to doctor profile page
    };
    return (
        <div className="doctor-search-container">
            <nav className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for doctors..."
                />
                <button onClick={handleLocationAccess}>
                    {locationAccess ? 'Disable Location' : 'Enable Location'}
                </button>
            </nav>
            {loading && <p className="loading">Loading...</p>}
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <div className="doctor-card" key={doctor.id} onClick={()=> handleDoctorClick(doctor.id)}>
                        <img
                            src={`https://via.placeholder.com/100?text=${doctor.name.charAt(0)}`}
                            alt={`${doctor.name} profile`}
                            className="doctor-image"
                        />
                        <div className="doctor-info">
                            <h3>{doctor.name}</h3>
                            <p><strong>Hospital:</strong> {doctor.hospital}</p>
                            <p><strong>City:</strong> {doctor.city}</p>
                            <p><strong>Specialty:</strong> {doctor.specialty}</p>
                            <p><strong>Status:</strong> {doctor.status}</p>
                            {doctor.distance != null && (
                                <p><strong>Distance:</strong> {doctor.distance.toFixed(2)} km</p>
                            )}
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                >
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    disabled={page === totalPages}
                    onClick={() => handlePageChange(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DoctorSearch;
