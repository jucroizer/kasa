import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as ReactDOM from 'react-dom/client';
import Home from "../pages/Home";
import Logement from "../pages/Logements";
import Error from "../pages/Error";
import Propos from "../pages/Propos";

function RouteManager() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logement/:id" element={<Logement />}></Route>
        <Route path="/propos" element={<Propos />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default RouteManager;
