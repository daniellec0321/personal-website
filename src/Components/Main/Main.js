import roundedProfilePicture from '../../images/rounded-profile-photo.png';
import githubLogo from '../../images/transparentGithubLogo.png';
import linkedinLogo from '../../images/linkedinLogo.png';
import '../../App.css';

function Main() {
  return (
    <div className="app-background">
      <header className="App-header">
        <img src={roundedProfilePicture} className="App-logo" alt="logo" />
        <h1>
          Danielle Croft
        </h1>
        <h3>daniellec0321@gmail.com</h3>
        <span>
          <a href="https://github.com/daniellec0321" target="_blank"><img className='github-logo' src={githubLogo} alt='githubLogo'/></a>
          <a href="https://www.linkedin.com/in/danielle-croft-a5a2aa205/" target="_blank"><img className='linkedin-logo' src={linkedinLogo} alt='linkedin-logo'/></a>
        </span>
      </header>
    </div>
  );
}

export default Main; 