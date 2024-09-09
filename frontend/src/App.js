import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Booking from './components/book_form'
import Select from './components/select_form';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/book" element={<Booking/>}/>
            <Route exact path="/select" element={<Select/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
