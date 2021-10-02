import logo from './logo.svg';
import './App.css';
import Fcomponent from "./Fcomponent";
import Ccomponent from "./Ccomponent";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        <Ccomponent name="Bony" age={[1, 2, 3, 4, 5]}/>
        <Fcomponent name="Rex"/>
      </header>
    </div>
  );
}

export default App;