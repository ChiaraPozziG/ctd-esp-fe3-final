import React from 'react';
import { ContextProvider } from './Components/utils/global.context'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favorites from './Routes/Favs';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}
export default App;
