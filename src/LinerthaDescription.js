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

            <section className="App-newsletter">
                <h2 className="App-description-sub-title">Let's keep in touch</h2>
                <h4>Join the newsletter to get monthly updates on my game development, new releases, and special offers.</h4>
                <div className="App-newsletter-email">
                    <input className="App-newsletter-email-input" type="email"></input>
                    <input className="App-newsletter-email-button" type="button" value="Subscribe"></input>
                </div>
                <p className="App-newsletter-email-message">No spam. 1 email per month. Unsubscribe anytime.</p>
            </section>

                {/* TODO: Write 4 sections on the game */}
                {/* <h2 className="App-description-sub-title">War tactics and great battles based on army blocks and shield walls</h2> */}
            
        </>
    );
}

export default LinerthaDescription;

