import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateNFT from "./pages/CreateNFT";
import Activity from './pages/Activity';
import CreateCollection from './pages/CreateCollection';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/createnft' element={<CreateNFT />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/create-collection' element={<CreateCollection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
