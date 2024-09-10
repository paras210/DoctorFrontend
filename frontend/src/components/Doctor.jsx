import React from 'react'
import photo from '../images/docPhoto.jpg'
import { Link } from 'react-router-dom'
export default function Doctor({name , speciality , hospital , city , distance , email}) {
    return (
            <div className="card d-inline-block" >
                <img src={photo} className="card-img-top" style={{  height: '150px' }}/>
                    <div className="card-body">
                        <h6 className="card-title fs-6 py-0" >{name}</h6>
                        <h6 className="card-title fs-6 py-0" >{speciality}</h6>
                        <h6 className="card-title fs-6 py-0" >{hospital}</h6>
                        <h6 className="card-title fs-6 py-0" >{city}</h6>
                        <h6 className="card-title fs-6 py-0" >{distance}kms</h6>
                        <h6 className="card-title fs-6 py-0" >{email}</h6>
                        
                        <Link to="/book" className="btn btn-primary btn-sm color1Btn">Schedule Appointment</Link>
                    </div>
            </div>
    )
}
