import React, { useState } from 'react'
import { useEffect } from 'react';
import Speciality from './Speciality'
import Doctor from './Doctor'
export default function SelectForm(props) {

  const[Doctors,setDoctors] = useState([]);
  const fetchingData = async()=>{

    let url=`http://192.168.75.225:8080/api/doctors/search-closest?userLatitude=29.250062&userLongitude=77.009861&specialty=${props.selectedSpeciality}&radius=${props.selectedRange}`
    let data =await fetch(url);
    let parsedData = await data.json();
    setDoctors(parsedData);
    // console.log(Doctors);
  }
  useEffect(() => {
      fetchingData()
    }, [props.selectedSpeciality , props.selectedRange])
  return (
    <div>
      <Speciality selectedSpeciality={props.selectedSpeciality} selectedRange={props.selectedRange} setSelectedSpeciality={props.setSelectedSpeciality} setSelectedRange={props.setSelectedRange}/>
      
      <div className="container py-5">
        <h1 className='text-center'>Handpicked Doctors Aligned with Your Needs</h1>
        <div className="row">
 
           {Doctors.map((element)=>{
               return <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3">
               <Doctor name={element.name} speciality={element.specialty} hospital={element.hospital} city={element.city} distance={element.distance} email={element.email}/>
                 </div>
           })}

          
          
          
        </div>
      </div>
    </div>
  )
}
