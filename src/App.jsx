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

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
