import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Home from './pages/Home'
import About from './pages/About';
import Tournaments from './pages/Tournaments';
import Blogs from './pages/Blogs';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { LoaderProvider } from './contexts/LoaderContext';
import Loader from './components/Loader';
import TournamentDetails from './pages/TournamentDetails';

function App() {

  return (
    <LoaderProvider>
      <Loader />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:id" element={<TournamentDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </LoaderProvider>
  )
}

export default App
