// import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import { Router, Route } from "react-router-dom";
import Counter from "./page/Couter-App";
import { Route, Routes } from "react-router-dom";
import Countertoolkit from "./page/Counter-App(redux-toolkit)";
import Forms from "./page/Forms";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Counter />} path={"counter"} />
        <Route element={<Countertoolkit />} path={"counter-toolkit"} />
        <Route element={<Forms />} path={"form"} />
        <Route path={"/"} />
      </Routes>
      <br />
      <h1>Home</h1>
      <br />
      <button>
        <a
          href="http://localhost:3000/counter"
          rel="noreferrer"
          // target="_blank"
        >
          Counter
        </a>
      </button>
      <br />
      <button>
        <a
          href="http://localhost:3000/counter-toolkit"
          rel="noreferrer"
          // target="_blank"
        >
          Counter-tool-kit
        </a>
      </button>
      <br />
      <button>
        <a
          href="http://localhost:3000/form"
          rel="noreferrer"
          // target="_blank"
        >
          form
        </a>
      </button>
    </>
  );
}

export default App;
