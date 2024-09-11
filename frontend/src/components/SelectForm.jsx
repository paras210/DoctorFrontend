import React, { useState, useEffect, useRef } from 'react';
import Speciality from './Speciality';
import Doctor from './Doctor';
import DoctorSearch from './DoctorSearch';


export default function SelectForm(props) {
  const [Doctors, setDoctors] = useState([]);
  const initialRender = useRef(true); 

  const fetchingData = async () => {
    console.log(props.apikey);
    
    let url = `https://medilocate-2-0.onrender.com/api/doctors/search-closest?userLatitude=29.250062&userLongitude=77.009861&specialty=${props.selectedSpeciality}&radius=${props.selectedRange}`

    
    let data = await fetch(url);
    let parsedData = await data.json();
    setDoctors(parsedData.doctors);
    console.log(parsedData.doctors);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false; 
    } else {
      fetchingData(); 
    }
  }, [props.selectedSpeciality, props.selectedRange]);

  return (
    <div>
        <DoctorSearch/>

      <Speciality 
        selectedSpeciality={props.selectedSpeciality} 
        selectedRange={props.selectedRange} 
        setSelectedSpeciality={props.setSelectedSpeciality} 
        setSelectedRange={props.setSelectedRange} 
      />
      
      <div className="container py-5">
        <h1 className='text-center'>Handpicked Doctors Aligned with Your Needs</h1>
        <div className="row">
          {Doctors.map((element) => {
            return (
              <div className="col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center py-3" key={element.id}>
                <Doctor 
                  id={element.id} 
                  name={element.name} 
                  speciality={element.specialty} 
                  hospital={element.hospital} 
                  city={element.city} 
                  distance= {element.distance ? element.distance.toFixed(2) : null}

                  email={element.email} 
                />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
