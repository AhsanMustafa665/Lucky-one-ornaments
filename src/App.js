import { useEffect } from "react";
import "./App.css";
import Shop from "./Shop/Shop";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header/Header";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
