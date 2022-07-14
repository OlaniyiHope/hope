import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Service'
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import { Abouts } from './pages/Abouts';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { AddEditBlog } from './pages/AddEditBlog';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Heading } from './component/Heading';


function App() {
  return (
  
<Router>
  <ToastContainer />
  <Routes>
<Route exact path="/" element={<Header />}>
                      
                    </Route>

<Route path="/services" element={<Services />}>

  
</Route>
<Route path="/about" element={<About />}>

  
</Route>
<Route path="/contact" element={<Contact />}>

  
</Route>
<Route path="/nav" element={<Nav />}>

  
</Route>
<Route path="/portfolio" element={<Portfolio />}>

</Route>

<Route path="/experience" element={<Experience />}>

  
</Route>
<Route path="/footer" element={<Footer />}>

  
</Route>
<Route path="/heading" element={<Heading />}>

  
</Route>
<Route path="/abouts" element={<Abouts />}>

</Route>
<Route path="/home" element={<Home />}>

</Route>

<Route path="/addBlog" element={<AddEditBlog />}>

</Route>
<Route path="/editBlog/:id" element={<AddEditBlog />}>

</Route>
<Route path="/blog/:id" element={<Blog />}>

</Route>
</Routes>
 </Router>
  
  );
}

export default App;
