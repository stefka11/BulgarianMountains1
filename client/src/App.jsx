import { useState } from 'react'
import { Routes, Route } from 'react-router';

import { UserContext } from './context/UserContext';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import './App.css'
import Catalog from './components/catalog/Catalog';




function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    < UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <div className="bg-white">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
      </div>
      </UserContext.Provider>
  )
}

export default App
