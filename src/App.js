import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Escocia from './Components/Escocia'
import Muralha from './Components/Muralha'
import Aruba from './Components/Aruba'
import GrandCanyon from './Components/GrandCanyon'
import Header from "./Components/Header";
import Home from "./Components/Home";
import Rodape from "./Components/Rodape";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Escocia" element={<Escocia />} />
          <Route path="Muralha" element={ <Muralha />} />
          <Route path="Aruba" element={ <Aruba />} />
          <Route path="GrandCanyon" element={ <GrandCanyon />} />
        </Routes>
        <Rodape/>
      </Router>
    </div>
  );
}

export default App;
