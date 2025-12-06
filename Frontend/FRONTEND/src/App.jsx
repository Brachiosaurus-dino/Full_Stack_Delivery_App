// import Navbar from "./components/navabr";
// import Home from "./home";
// import About_us from "./about_us"
// import Footer from "./components/footer";
// import Menu_Items from "./menu_items";
// import Contact_Us from "./contact_us";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Menu from "./menu";
// import CartPage from "./order";
// import Checkout from "./components/place_order";
// import U_and_D from "./update_deleet_1";
// function App() {
//   return (
//     <>

//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about_us" element={<About_us />} />
//         <Route path='/contact_us' element={<Contact_Us />} />
//         <Route path='/restaurents' element={<Menu />} />
//         <Route path="/restaurents/:id" element={<Menu_Items />} />
//         <Route path="/cart" element={<CartPage/>}/>
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/changes" element={<U_and_D/>}/>
//       </Routes>
      
//       <Footer />

//     </>
//   );
// }

// export default App;


import Navbar from "./components/navabr";
import Footer from "./components/footer";
import Home from "./home";
import About_us from "./about_us";
import Menu from "./menu";
import Menu_Items from "./menu_items";
import Contact_Us from "./contact_us";
import CartPage from "./order";
import Checkout from "./components/place_order";
import U_and_D from "./update_deleet_1";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protect_Routes from "./components/Protect_routes.jsx";
import Success from "./success.jsx";

function App() {
  return (
  <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path="/contact_us" element={<Contact_Us />} />
        <Route path="/restaurents" element={<Menu />} />
        <Route path="/restaurents/:id" element={<Menu_Items />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success/>}/>
        <Route path="/changes" element={
          <Protect_Routes adminOnly={true}>
            <U_and_D />
          </Protect_Routes>
        }
        />
      </Routes>

      <Footer />
    </>
  
  );
}

export default App;
