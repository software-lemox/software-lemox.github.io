// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import LinerthaMain from './LinerthaMain';
import LinerthaDescription from './LinerthaDescription';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="App-header-title-link" to="/">
            <h1 className="App-header-title">Lemox Software</h1>
          </Link>

          <div className="App-social">Social</div>
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
