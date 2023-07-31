import Headers from "./components/Headers";
import Tabs from "./components/Tabs";
import RecipeLists from "./components/RecipeLists";
import './App.scss'
import { useState } from "react";

function App() {
  const [loader,setLoader] = useState(true);
  return (
    <div className="main">
      <Headers/>
      <Tabs/>
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className="loader">
          <div className="spinner"></div>
        </div>}
    </div>
  );
}

export default App;
