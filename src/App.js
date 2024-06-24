import './App.css';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Training from './Pages/Training/Training'
import Contact from './Pages/Contact/Contact'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training' element={<Training />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
