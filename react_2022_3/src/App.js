import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../src/Components/styles/App.css";
import About from "./Components/pages/About";
import Post from "./Components/pages/Post";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="a" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="a" to="/post">
                Posts
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
