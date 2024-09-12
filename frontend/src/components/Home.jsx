import React from 'react'
// import Display from '../images/display5.avif'
// import Doctor from './Doctor'
import Choose from './choose'
import Crousel from './crousel'
import Aboutus from './Aboutus'
import DoctorSearch from './DoctorSearch'
import SelectForm from './SelectForm'
export default function Home(props) {
  return (
    <>
      
      <Crousel/>
      <DoctorSearch/>
      <Choose/>
      <Aboutus/>
      
      <SelectForm apikey={props.apikey} selectedSpeciality={props.selectedSpeciality} selectedRange={props.selectedRange} setSelectedSpeciality={props.setSelectedSpeciality} setSelectedRange={props.setSelectedRange}/>
      

    </>
  )
}
