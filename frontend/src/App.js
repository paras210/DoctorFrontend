import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Booking from './components/book_form'
import Select from './components/SelectForm';
import Footer from './components/footer';
import DoctorList from './components/DoctorList'
import DoctorSearch from './components/DoctorSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SlotRetrieval from './components/SlotRetrieval';
function App() {
  const [selectedSpeciality, setSelectedSpeciality] = useState("CARDIOLOGIST");
  const [selectedRange, setSelectedRange] = useState('10');
  const apikey=process.env.REACT_APP_BASE_URL
  return (
    <>
      <Router>
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home apikey={apikey}/>}/>
            <Route exact path="/book" element={<Booking apikey={apikey}/>}/>
            <Route exact path="/gpt" element={<DoctorList  apikey={apikey}/>}/>
            <Route exact path="/search" element={<DoctorSearch apikey={apikey}/>}/>
            <Route exact path="/slotretrieval" element={<SlotRetrieval apikey={apikey}/>}/>
            <Route exact path="/select" element={<Select apikey={apikey} selectedSpeciality={selectedSpeciality} selectedRange={selectedRange} setSelectedSpeciality={setSelectedSpeciality} setSelectedRange={setSelectedRange} />}/>

          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
