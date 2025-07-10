import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
<<<<<<< HEAD


=======
// 
>>>>>>> 639a5a1690fb0b1bb04a5ea63fd8e0166fcec49a
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
