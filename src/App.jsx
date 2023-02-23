import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Vegan from "./pages/Vegan";
import VeganFriendly from "./pages/VeganFriendly";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/veganFriendly" element={<VeganFriendly />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
