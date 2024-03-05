import profilePicture from './images/profile-picture.heic';
import './App.css';

function App() {
  return (
    <div className="app-background">
      <header className="App-header">
        <img src={profilePicture} className="App-logo" alt="logo" />
        <h1>
          Danielle Croft
        </h1>
        <center><a className='github-logo' href="https://github.com/daniellec0321" target="_blank"></a></center>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
