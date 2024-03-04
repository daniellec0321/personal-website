import logo from './logo.svg';
import profilePicture from './images/profile-picture.heic';
import './App.css';

function App() {
  return (
    <div className="app-background">
      <header className="App-header">
        <img src={profilePicture} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
