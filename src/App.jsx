import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Opcenito from "./components/Opcenito";
import Donacije from "./components/Donacije";
import Footer from "./components/Footer";
import PopisZivotinja from "./components/PopisZivotinja";
import Unos from "./components/Unos";
import axios from "axios";
import "./App.css";

function App() {
  const [admin, setAdmin] = useState(false);
  const [zivotinje, postaviZivotinje] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/zivotinje")
      .then((res) => postaviZivotinje(res.data));
  }, []);

  return (
    <div>
      <Navbar admin={admin} setAdmin={setAdmin} />
      <div>
        <Routes>
          <Route path={"/"} element={<Opcenito />}></Route>
          <Route
            path={"/popis"}
            element={
              <PopisZivotinja
                zivotinje={zivotinje}
                postaviZivotinje={postaviZivotinje}
                admin={admin}
              />
            }
          ></Route>
          <Route path="/donacije" element={<Donacije />}></Route>
          <Route path="/unos" element={<Unos />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
