import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Components/BlogDetail";
import ContactSection from "./Pages/Contact";
import ScrollToTop from "./Pages/ScrollTop";
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pages" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:id" element={<BlogDetail/>}/>
          <Route path="/contact" element={<ContactSection/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
