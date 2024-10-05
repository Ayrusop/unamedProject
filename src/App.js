import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ContactPage from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/About';
import Service from './Components/Service';
import ScrollToTop from './Components/ScroolToTop';
import PortfolioSection from './Components/PortfolioSection'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <HelmetProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/aboutus' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/getquote' element={<PortfolioSection />} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
