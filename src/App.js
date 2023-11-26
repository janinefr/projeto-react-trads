import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Inicio from './pages/Inicio';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router> 
      <GlobalStyle/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>  
  );
}


export default App;
