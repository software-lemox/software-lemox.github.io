import { useEffect } from 'react';

function LinerthaDescription() {

    useEffect(() => {
        const element = document.getElementById('target-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <section className="App-description" id="target-section">
                <div className="App-description-section-wrapper App-description-background-image">
                    <div className="App-description-section-content">
                        <div className="App-main-title App-description-inner">LINERTHA</div>
                        <p className="App-description-text App-description-inner">Linertha is a medieval RTS PC video game that focused on war tactics, great strongholds and castles management, customizable armament and buildings.</p>
                    </div>
                    <div className="App-description-section-content">
                        <a className="App-steam-icon"></a>
                    </div>
                </div>                
            </section>
        </>
    );
}

export default LinerthaDescription;

