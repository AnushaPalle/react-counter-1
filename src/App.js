import './App.css';
import Counter from "./components/Counter"
import CounterHOC from "./components/CounterHOC"

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <CounterHOC/>
    </div>
  );
}

export default App;
