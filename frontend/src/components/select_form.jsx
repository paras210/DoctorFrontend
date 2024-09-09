import React from 'react'
import Speciality from './Speciality'
import Doctor from './Doctor'
export default function select_form() {
  return (
    <div>
      <Speciality/>
      <div className="container py-5">
        <h1 className='text-center'>Handpicked Doctors Aligned with Your Needs</h1>
        <div className="row">
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
        <Doctor />
          </div>
        </div>
      </div>
    </div>
  )
}
