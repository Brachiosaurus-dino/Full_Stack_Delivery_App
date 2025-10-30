import Navbar from "./components/navabr";
import Home from "./home";
import About_us from "./about_us"
import Footer from "./components/footer";
import Contact_Us from "./contact_us";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./menu";
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About_us/>}/>
        <Route path='/contact_us' element={<Contact_Us/>}/>
        <Route path='/restaurents' element={<Menu/>}/>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
