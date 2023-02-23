import "./App.css";
import Nav from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import Vegan from "./pages/vegan";
import VeganFriendly from "./pages/vegan";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/veganFriendly" element={<VeganFriendly />} />
        </Routes>
      </Router>
      <header className="Header">
        <h1>719 Vegan Finds</h1>
      </header>
    </div>
  );
}

export default App;
