import logo from '../asset/img/app-logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a href="https://reactjs.org" target="_blank" className="App-link" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;