import Navbar from "./components/navabr";
import Home from "./home";
import About_us from "./about_us"
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About_us/>}/>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
