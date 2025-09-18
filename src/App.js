// import logo from './logo.svg';
import './App.css';
import './style/popUpMessage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import LinerthaMain from './LinerthaMain';
import LinerthaDescription from './LinerthaDescription';
import x_logo from './assets/x_logo.svg';
import discord_logo from './assets/discord_logo.svg';
import instagram_logo from './assets/instagram_logo.svg';
import reddit_logo from './assets/reddit_logo.svg';
import youtube_logo from './assets/youtube_logo.svg';
import gmail_logo from './assets/gmail_logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="App-header-title-link" to="/">
            <h1 className="App-header-title">Lemox Software</h1>
          </Link>

          <div className="App-social">
            <a href="https://x.com/LemoxSoftware" target="_blank" rel="noopener noreferrer">
              <img className="App-social-x" src={x_logo} alt="X Logo" />
            </a>

            <a href="https://discord.com/invite/DmUdVD9JSE" target="_blank" rel="noopener noreferrer">
              <img className="App-social-discord" src={discord_logo} alt="Discord Logo" />
            </a>

            <a href="https://www.youtube.com/@lemoxsoftware" target="_blank" rel="noopener noreferrer">
              <img className="App-social-youtube" src={youtube_logo} alt="YouTube Logo" />
            </a>

            <a href="https://www.reddit.com/user/LemoxSoftware/" target="_blank" rel="noopener noreferrer">
              <img className="App-social-reddit" src={reddit_logo} alt="Reddit Logo" />
            </a>

            <a href="https://www.instagram.com/lemoxsoftware/" target="_blank" rel="noopener noreferrer">
              <img className="App-social-instagram" src={instagram_logo} alt="Instagram Logo" />
            </a>

            <a href="mailto:software.lemox@gmail.com?subject=Contact%20mail%20from%20website&body=Hi%20Lemox%20%F0%9F%A4%99">
              <img className="App-social-gmail" src={gmail_logo} alt="Gmail Logo" />
            </a>
          </div>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/linertha" element={<LinerthaMain />} />
          </Routes>
        </main>

        <section>
          <Routes>
            <Route path="/linertha" element={<LinerthaDescription />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
