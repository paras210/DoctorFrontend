import React from 'react'
import Display from '../images/display5.avif'
import Speciality from './Speciality'
import Doctor from './Doctor'
import Choose from './choose'
import Crousel from './crousel'
export default function Home() {
  return (
    <>
      {/* <div className="container-xxl p-0 custom-max-height" >
        <img src={Display} alt="" className="img-fluid w-100 " />
      </div> */}
      <Crousel/>
      <Choose/>


      <div className="container py-4">
        <h2 className='text-center'>Top-Rated Healthcare Professionals</h2>
        <div className="row ">
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
    </>
  )
}
