import React, { useEffect, useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async (page = 1, status = 'ALL') => {
    setLoading(true);
    try {
      const url = `http://192.168.210.225:8080/api/appointments/user?page=${page}`;
      const response = await fetch(url);
      const data = await response.json();

      if (status === 'ALL') {
        setAppointments(data.appointmentList);
      } else {
        setAppointments(
          data.appointmentList.filter((appointment) => appointment.appointmentStatus === status)
        );
      }
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments(currentPage, selectedStatus);
  }, [currentPage, selectedStatus]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  return (
    <div className="appointments-page">
      <h1>Your Appointments</h1>

      <div className="filter-buttons">
        <button onClick={() => handleStatusChange('ALL')} className={selectedStatus === 'ALL' ? 'active' : ''}>Get All</button>
        <button onClick={() => handleStatusChange('BOOKED')} className={selectedStatus === 'BOOKED' ? 'active' : ''}>Get Booked (Upcoming)</button>
        <button onClick={() => handleStatusChange('COMPLETED')} className={selectedStatus === 'COMPLETED' ? 'active' : ''}>Completed</button>
        <button onClick={() => handleStatusChange('CANCELLED')} className={selectedStatus === 'CANCELLED' ? 'active' : ''}>Cancelled</button>
      </div>

      {loading && <p>Loading appointments...</p>}

      <div className="appointments-list">
        {!loading && appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div className="appointment-card" key={appointment.id}>
              <h2>{appointment.doctorName}</h2>
              <p><strong>City:</strong> {appointment.city}</p>
              <p><strong>Status:</strong> {appointment.appointmentStatus}</p>
              <p><strong>Start Time:</strong> {new Date(appointment.startTime).toLocaleString()}</p>
              <p><strong>End Time:</strong> {new Date(appointment.endTime).toLocaleString()}</p>
            </div>
          ))
        ) : (
          !loading && <p>No appointments found.</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Appointments;
