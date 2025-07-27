import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="App-main-title">LINERTHA</div>
            <Link className="App-link" to="/linertha">
                Read More
            </Link>
        </>
    );
}

export default Home;