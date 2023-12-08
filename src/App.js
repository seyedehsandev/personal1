import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/pages/Header"
import About from "./components/pages/about/About"
import Experience from "./components/pages/experience/Experience"
import Contact from "./components/pages/Contact"
import Footer from "./components/pages/footer/Footer"
import Projects from "./components/pages/Project/Projects"
import { Route , Routes } from 'react-router-dom';



function App() {
  return (
    <>
              <Navbar />
      <Routes>

        <Route index element={<Header/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>

      </Routes>

      <Footer />
      
      
      

    </>
  );
}

export default App;
