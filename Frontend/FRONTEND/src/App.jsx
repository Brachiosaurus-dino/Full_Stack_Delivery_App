import Navbar from "./components/navabr";
import Home from "./home";
import About_us from "./about_us"
import Footer from "./components/footer";
import Menu_Items from "./menu_items";
import Contact_Us from "./contact_us";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./menu";
import CartPage from "./order";
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path='/contact_us' element={<Contact_Us />} />
        <Route path='/restaurents' element={<Menu />} />
        <Route path="/restaurents/:id" element={<Menu_Items />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      
      <Footer />

    </>
  );
}

export default App;
