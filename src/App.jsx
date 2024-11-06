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
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import BlogDetails from './pages/BlogDetails';

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
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </LoaderProvider>
  )
}

export default App
