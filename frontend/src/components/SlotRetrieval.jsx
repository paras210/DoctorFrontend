import React, { useState, useEffect, useCallback } from 'react';

// Debounce function
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const SlotRetrieval = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [locationAccess, setLocationAccess] = useState(true);

    // Fetch doctors based on search term, page, and location access
    const fetchDoctors = useCallback(debounce(async (searchTerm, page) => {
        setLoading(true);
        const userLatitude = locationAccess ? 29.250062 : null; // Example latitude
        const userLongitude = locationAccess ? 77.009861 : null; // Example longitude
        const response = await fetch(
            `http://192.168.75.225:8080/api/slots/doctor/1?date=2024-09-15/search?name=${searchTerm}&userLatitude=${userLatitude}&userLongitude=${userLongitude}&page=${page}&size=10`
        );
        const data = await response.json();
        setDoctors(data);
        setLoading(false);
    }, 1000), [locationAccess]);

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
        setPage(newPage);
    };

    const handleLocationAccess = () => {
        // Example function to toggle location access
        setLocationAccess(!locationAccess);
    };

    return (
        <div>
            <nav>
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
            {loading && <p>Loading...</p>}
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <h3>{doctor.name}</h3>
                        <p>Hospital: {doctor.hospital}</p>
                        <p>Specialty: {doctor.specialty}</p>
                        <p>Availability: {JSON.stringify(doctor.availability)}</p>
                        <p>City: {doctor.city}</p>
                        <p>Status: {doctor.status}</p>
                        {doctor.distance != null && (
                            <p>Distance: {doctor.distance.toFixed(2)} km</p>
                        )}
                        <p>Email: {doctor.email}</p>
                    </li>
                ))}
            </ul>
            <div>
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

export default SlotRetrieval;