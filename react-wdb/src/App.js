import logo from './logo.svg';
import './App.css';
import Fcomponent from "./Fcomponent";
import Ccomponent from "./Ccomponent";
import Sum from "./SumComponent";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Ccomponent />
      </header>
    </div>
  );
}

export default App;