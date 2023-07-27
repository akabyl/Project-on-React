import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";


function App() {  
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects/>}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    
        <Footer/>
      </Router>


    </div>
  );
}

export default App;
