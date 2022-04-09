import React from 'react'
import { BrowserRouter as Router} from "react-router-dom"
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Service'
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'


function App() {
  return (
   <Router>
     <div>
<Header />
<Nav />
<About />
<Experience />
<Services />
<Portfolio />
<Contact />
<Footer />
     </div>
   </Router>
  );
}

export default App;
