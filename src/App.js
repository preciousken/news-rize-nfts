import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import CreateNFT from "./pages/CreateNFT";
import Activity from './pages/Activity';
import CreateCollection from './pages/CreateCollection';
import Author from './pages/Author';
import EditProfile from './pages/edit_profile';
import Collection from './pages/Collection';
import ProductDetails from './pages/product-details';
import PageNotFound from "./pages/PageNotFound"


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
          <Route path='/author' element={<Author />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/product-details' element={<ProductDetails />} />


          {/* 404 page */}
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
