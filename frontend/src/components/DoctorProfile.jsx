import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar'; // If you're using react-calendar
import 'react-calendar/dist/Calendar.css';

// Utility to format date and time
const formatDateTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const DoctorProfile = () => {
    const { doctorId } = useParams();  // Get the doctor ID from the URL
    const [doctor, setDoctor] = useState(null);
    const [slots, setSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);  // No date selected initially
    const [loadingSlots, setLoadingSlots] = useState(false);

    // Fetch doctor details on component mount
    useEffect(() => {
        fetch(`http://192.168.75.225:8080/api/doctors/${doctorId}`)
            .then((response) => response.json())
            .then((data) => setDoctor(data))
            .catch(error => console.error("Error fetching doctor details:", error));
    }, [doctorId]);

    // Fetch slots (with optional date)
    const fetchSlots = (date) => {
        setLoadingSlots(true);
        let formattedDate = date ? date.toISOString().split('T')[0] : '';  // Convert date to YYYY-MM-DD if selected
        let url = `http://192.168.75.225:8080/api/slots/doctor/${doctorId}`;
        if (formattedDate) {
            url += `?date=${formattedDate}`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSlots(data);
                setLoadingSlots(false);
            })
            .catch(error => {
                console.error("Error fetching slots:", error);
                setLoadingSlots(false);
            });
    };

    // Fetch today's slots on component mount
    useEffect(() => {
        fetchSlots(selectedDate);
    }, [doctorId, selectedDate]);

    return (
        <div className="doctor-profile">
            {doctor ? (
                <div>
                    <h1>{doctor.name}</h1>
                    <p><strong>Hospital:</strong> {doctor.hospital}</p>
                    <p><strong>City:</strong> {doctor.city}</p>
                    <p><strong>Specialty:</strong> {doctor.specialty}</p>
                    <p><strong>Status:</strong> {doctor.status}</p>

                    {/* Slot Availability Section */}
                    <h2>Available Slots</h2>
                    <p>Select a date to view available slots:</p>
                    <Calendar onChange={setSelectedDate} value={selectedDate} />

                    {/* Display slots */}
                    {loadingSlots ? (
                        <p>Loading slots...</p>
                    ) : slots.length > 0 ? (
                        <div className="slots">
                            {slots.map((slot) => (
                                <div key={slot.slotId} className="slot">
                                    <p><strong>Start Time:</strong> {formatDateTime(slot.startTime)}</p>
                                    <p><strong>End Time:</strong> {formatDateTime(slot.endTime)}</p>
                                    <p>`<strong>Status:</strong> ${slot.status}`</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No available slots for the selected date.</p>
                    )}
                </div>
            ) : (
                <p>Loading doctor profile...</p>
            )}
        </div>
    );
};

export default DoctorProfile;
