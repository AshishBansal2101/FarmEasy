import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header.js";
import Footer from "./components/Layout/Footer/Footer.js";
import Shop from "./components/Layout/Shop/Shop.js";
import Blogs from "./components/Layout/Blogs/Blogs.js";
import Ask from "./components/Layout/Ask/Ask.js";
import Quora from "./components/Layout/Quora/Quora.js";


function App() {
  return (
    <>
    
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs" element={<Blogs/>} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/ask" element={<Ask />} />
        <Route exact path="/quora" element={<Quora/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
