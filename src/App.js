import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Home } from "./pages/home/home";


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>  {" "} || {" "}
        <NavLink to="/mockman">Mockman</NavLink> 



      </nav>

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
