import { useEffect } from "react";
import "./App.css";
import Shop from "./Shop/Shop";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Shop></Shop>
    </div>
  );
}

export default App;
