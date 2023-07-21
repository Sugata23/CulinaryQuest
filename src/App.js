import Headers from "./components/Headers";
import Tabs from "./components/Tabs";
import RecipeLists from "./components/RecipeLists";
import './App.scss'

function App() {
  return (
    <div className="main">
      <Headers/>
      <Tabs/>
      <RecipeLists/>
    </div>
  );
}

export default App;
