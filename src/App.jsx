import {
  BrowserRouter, Routes, Route, Link, NavLink,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import WhatWeDo from './pages/WhatWeDo';
import Sponsorship from './pages/Sponsorship';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
