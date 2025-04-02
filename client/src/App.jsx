import { Routes, Route } from 'react-router';
import UserProvider from './providers/UserProvider';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import './App.css'
import Catalog from './components/catalog/Catalog';
import ArticleCreate from './components/article-create/ArticleCreate';
import ArticleDetails from './components/article-details/ArticleDetails';

function App() {
  return (
    <UserProvider>
      <div className="bg-white">
        <Header />
        <main id="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/article/create" element={<ArticleCreate />} />
            <Route path="/article/:articleId/details" element={<ArticleDetails />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  )
}

export default App
