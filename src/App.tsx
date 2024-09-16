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
import ProductDetails from './pages/nft-details';
import PageNotFound from "./pages/PageNotFound"
import AuthRequired from './context/AuthRequired';
import AuthProvider from './context/AuthContext';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { config } from './config';
import { io } from "socket.io-client";
import MyCollection from './pages/MyCollection';
import CreateNft_ from './pages/CreateNft_';


export const socket = io(`${config.socketUrl}`);


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <AuthProvider>
        <Router>
          <div>
            <Header />
            <Routes>
              {/* Use AuthRequired when needed */}
              {/* <Route element={<AuthRequired />}> */}
              <Route path="/" element={<Home />} />
              {/* </Route> */}
              {/* <Route path="/createnft" element={<CreateNFT />} /> */}
              <Route path="/activity" element={<Activity />} />
              <Route path="/create-collection" element={<CreateCollection />} />
              <Route path="/author" element={<Author />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/my-collection" element={<MyCollection/>} />
              <Route path="/nft-details" element={<ProductDetails />} />
              <Route path="/createnft" element={<CreateNft_ />} />

              {/* 404 page */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
