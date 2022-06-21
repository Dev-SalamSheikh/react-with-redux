import "./App.css";
import CounterView from "./Features/Counter/CounterView";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Counter App With Redux Toolkit</h1>
        <CounterView />
      </div>
    </div>
  );
}

export default App;
