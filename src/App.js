
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './Components/Contact';
function App() {
  return (
    <Router>
      <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
     </Routes>
    </div>
    </Router>
    
  );
}

export default App;
