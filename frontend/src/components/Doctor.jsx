import React from 'react'
import photo from '../images/docPhoto.jpg'
import { Navigate , useNavigate } from 'react-router-dom';
export default function Doctor({id , name , speciality , hospital , city , distance , email }) {
    const navigate = useNavigate();

    const handleDoctorClick = (doctorId) => {
        navigate(`/doctor/${doctorId}`); 
    };
    return (
            <div className="card d-inline-block" >
                <img src={photo} className="card-img-top" style={{  height: '150px' }}/>
                    <div className="card-body">
                        <h5 className="card-title " ><strong>{name}</strong></h5>
                        <p className="card-text fs-6 py-0 mb-1"><strong>Hospital:</strong> {hospital}</p>
                        <p className="card-text fs-6 py-0 mb-1"><strong>City:</strong> {city}</p>
                        <p className="card-text fs-6 py-0 mb-1"><strong>Specialty:</strong> {speciality}</p>
                        <p className="card-title fs-6 py-0 mb-1" ><strong>Distance</strong> {distance}kms</p>
                        <p className="card-title fs-6 py-0 mb-1" ><strong>Email:</strong> {email}</p>
                        
                        <button onClick={()=> handleDoctorClick(id)}  className="btn btn-primary btn-sm color1Btn">Schedule Appointment</button>
                    </div>
            </div>
    )
}
