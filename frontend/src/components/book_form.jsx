import React from 'react'
import photo from '../images/docPhoto.jpg'
export default function book() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">

        </div>
      <div className="col-md-6 p-3">
      <div className='text-center mb-4'>
        <img
          src={photo}
          className="rounded-circle"
          alt="Profile"
          style={{ width: '150px', height: '150px' }} 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="form-label fw-bold fs-6">Patient Name</label>
        <input type="text" className="form-control" id="name" placeholder="name" />

        <label htmlFor="emailid" className="form-label fw-bold fs-6 mt-3">Email address</label>
        <input type="email" className="form-control" id="emailid" placeholder="name@example.com" />
      </div>

      <h3 className="fs-6 fw-bold mb-3">Gender</h3>
      <div className="form-check mb-2">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
        <label className="form-check-label fs-6" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>

      <div className="d-grid gap-2 mt-4">
        <button className="btn btn-secondary" type="button">Submit</button>
      </div>
    </div>



        <div className="col-md-3">


        </div>
      </div>
    </div>
  )
}
