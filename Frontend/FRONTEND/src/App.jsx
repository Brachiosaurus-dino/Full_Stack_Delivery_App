import Navbar from "./components/navabr";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


    </>
  );
}

export default App;
