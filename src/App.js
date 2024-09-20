import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ContactPage from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/About';
import Service from './Components/Service';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/service' element={<Service />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
