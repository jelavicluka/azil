import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Opcenito from "./components/Opcenito";
import Donacije from "./components/Donacije";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <div>
      <Navbar admin={admin} setAdmin={setAdmin} />
      <div>
        <Routes>
          <Route path="/opcenito" element={<Opcenito />}></Route>
          <Route path="/donacije" element={<Donacije />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
