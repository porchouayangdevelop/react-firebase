import {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  useReducer,
} from "react";
import "./App.css";
// import axios from "axios";

const themeContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);

  return <div className="App"></div>;
}

export default App;
