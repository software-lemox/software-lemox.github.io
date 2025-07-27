import { Link } from 'react-router-dom';

function LinerthaMain() {
    return (
        <>
            <div className="App-main-title">LINERTHA</div>
            <Link className="App-link" to="/">
                {/* TODO: Add wishlist steam link here.. */}
                Wishlist on steam
            </Link>
        </>
    );
}

export default LinerthaMain;