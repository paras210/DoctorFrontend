import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Booking from './components/book_form'
import Select from './components/SelectForm';
import Footer from './components/footer';
import DoctorSearch from './components/DoctorSearch';
import DoctorProfile from './components/DoctorProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SlotRetrieval from './components/SlotRetrieval';
import Appointments from './components/Appointments';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [selectedSpeciality, setSelectedSpeciality] = useState("CARDIOLOGIST");
  const [selectedRange, setSelectedRange] = useState('10');
  const apikey=process.env.REACT_APP_BASE_URL;
  const [id,setId] = useState(1); 
  return (
    <>
      <Router>
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home apikey={apikey} selectedSpeciality={selectedSpeciality} selectedRange={selectedRange} setSelectedSpeciality={setSelectedSpeciality} setSelectedRange={setSelectedRange}/>}/>
            <Route exact path="/book" element={<Booking apikey={apikey}/>}/>
            <Route exact path="/search" element={<DoctorSearch apikey={apikey}/>}/>
            <Route exact path="/login" element={<Login apikey={apikey}/>}/>
            <Route exact path="/slotretrieval" element={<SlotRetrieval apikey={apikey}/>}/>
            <Route exact path="/appointments" element={<Appointments apikey={apikey}/>}/>
            <Route exact path="/doctor/:doctorId" element={<DoctorProfile apikey={apikey} id={id} setId={setId}/>}/>
            <Route exact path="/select" element={<Select apikey={apikey} selectedSpeciality={selectedSpeciality} selectedRange={selectedRange} setSelectedSpeciality={setSelectedSpeciality} setSelectedRange={setSelectedRange} />}/>
            <Route
          path="/"
          element={
            <PrivateRoute>
              <Appointments />
            </PrivateRoute>
          }
        />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
