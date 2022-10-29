import React,{ useState } from "react";
import { Routes, Route } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import "./App.css";
import InputBox from "./Components/InputBox";
const Details = React.lazy(() => import('./Components/Details'));

export default function App() {
  const [birth, setBirth] = useState({});
  const [astro, setAstro] = useState({});
  const [gem, setGem] = useState([]);

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<InputBox setBirth={setBirth} setAstro={setAstro} setGem={setGem} /> }/>
        <Route
          path="/details"
          element={
           <React.Suspense fallback={<div><FadeLoader className="spinner" color="black" size={150} aria-label="Loading Spinner"/></div>}>
              <Details birth={birth} astro={astro} gem={gem}/>
            </React.Suspense>
          }
          />
          <Route path="*" element={<div className="spinner">Not Found</div>}/>
      </Routes>

    </div>
  );
}