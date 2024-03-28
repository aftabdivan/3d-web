import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import Contstruction from "./components/Contstruction/Contstruction.jsx";
import PanaromaImage from "./components/PanaromaImage/PanaromaImage.jsx";

function App() {
  return (
    <BrowserRouter basename="/3d-web">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/construction" exact element={<Contstruction />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/image" exact element={<PanaromaImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
