import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Booking from './components/book_form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/book" element={<Booking/>}/>
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
