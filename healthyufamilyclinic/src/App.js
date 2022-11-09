// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Index';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services'
import Home from './pages/Home'
import About from './pages/About'
import Forms from './pages/Forms'
import Team from './pages/Team'
import Contact from './pages/Contact'
import {motion} from 'framer-motion'

const fadeLeft ={
  hidden: {opacity: 0, y:100},
  visible: {opacity:1, y:0}
}



function App() {
  return (
    <>
    <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}>
     <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/about' element={<About />} />
          <Route path='/meet-the-team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>


      <Footer />
      </motion.div>
    </>
  );
}

export default App;


