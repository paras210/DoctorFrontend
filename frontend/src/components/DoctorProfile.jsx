import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const formatDateTime = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return {
        date: date.toLocaleDateString(undefined, options),
        time: date.toLocaleTimeString(undefined, timeOptions),
    };
};

const DoctorProfile = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [slots, setSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [bookingStatus, setBookingStatus] = useState('');

    useEffect(() => {
        fetch(`http://192.168.210.225:8080/api/doctors/${doctorId}`)
            .then((response) => response.json())
            .then((data) => setDoctor(data))
            .catch(error => console.error("Error fetching doctor details:", error));
    }, [doctorId]);

    const fetchSlots = (date) => {
        setLoadingSlots(true);
        let formattedDate = date ? date.toISOString().split('T')[0] : '';
        let url = `http://192.168.210.225:8080/api/slots/doctor/${doctorId}`;
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

    useEffect(() => {
        fetchSlots(selectedDate);
    }, [doctorId, selectedDate]);

    const handleSlotClick = (slot) => {
        if (slot.status === 'AVAILABLE') {
            if (window.confirm(`Do you want to book the slot on ${formatDateTime(slot.startTime).date} from ${formatDateTime(slot.startTime).time} to ${formatDateTime(slot.endTime).time}?`)) {
                fetch(`http://192.168.210.225:8080/api/appointments/book`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ slotId: slot.slotId, doctorId: parseInt(doctorId) }),
                })
                .then((response) => {
                    if (response.ok) {
                        setBookingStatus('Slot booked successfully!');
                        fetchSlots(selectedDate);
                    } else {
                        setBookingStatus('Failed to book the slot.');
                    }
                })
                .catch(error => {
                    console.error("Error booking slot:", error);
                    setBookingStatus('Error booking slot.');
                });
            }
        } else {
            setBookingStatus('This slot is already booked or unavailable.');
        }
    };

    return (
      
        <div className="doctor-profile container">
            
            {doctor ? (
                <div className="doctor-details col-md-6">
                    <h1>{doctor.name}</h1>
                    <p><strong>Hospital:</strong> {doctor.hospital}</p>
                    <p><strong>City:</strong> {doctor.city}</p>
                    <p><strong>Specialty:</strong> {doctor.specialty}</p>
                    <p><strong>Status:</strong> {doctor.status}</p>

                    <h2>Available Slots</h2>
                    <p>Select a date to view available slots:</p>
                    <div className="calendar-container">
                        <Calendar onChange={setSelectedDate} value={selectedDate} />
                    </div>
                </div>
            ) : (
                <p>Loading doctor profile...</p>
            )}

            <div className="slots-container">
                {loadingSlots ? (
                    <p>Loading slots...</p>
                ) : slots.length > 0 ? (
                    
                    <div className="slots-grid d-flex flex-wrap">
                        {slots.map((slot) => {
                            const { date, time: startTime } = formatDateTime(slot.startTime);
                            const { time: endTime } = formatDateTime(slot.endTime);

                            return (
                                <div
                                    key={slot.slotId}
                                    className={`slot-card ${slot.status === 'AVAILABLE' ? 'available' : 'booked-cancelled'}`}
                                    onClick={() => handleSlotClick(slot)}
                                >
                                    
                                    <p><strong>Time:</strong> {`${startTime} - ${endTime}`}</p>
                                    <p><strong>Status:</strong> {slot.status}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>No available slots for the selected date.</p>
                )}
            </div>

            {/* {bookingStatus && (
                <div className="booking-status">
                    <p>{bookingStatus}</p>
                </div>
            )} */}
        </div>
    );
};

export default DoctorProfile;
