import React from 'react'
import Display from '../images/display5.avif'
import Speciality from './Speciality'
export default function Home() {
  return (
    <>
      <div className="container-xxl p-0 custom-max-height" >
        <img src={Display} alt="" className="img-fluid w-100 "  />
      </div>
        <Speciality/>
    </>
  )
}
