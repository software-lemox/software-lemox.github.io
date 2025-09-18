import { useState, useEffect } from 'react';
import useEmail from "./objects/useEmail";
import PopupMessage from "./objects/PopupMessage";

function LinerthaDescription() {
    const { email, setEmail } = useEmail();
    const [popupMessage, setPopupMessage] = useState("");

    useEffect(() => {
        const element = document.getElementById('target-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email": email }),
      });

      // Handle error
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error) {
          setPopupMessage(errorData.error);
          setEmail("");
        } else {
          setPopupMessage("Something went wrong. Please try again.");
        }
        return;
      }

      // handle success responses
      const data = await response.json();
      if (data.message) {
        setPopupMessage(`Email ${email} subscribed successfully`);
        setEmail("");
      }
    } catch (err) {
      // server not reachable / network error
      setPopupMessage("Connection error, please try again later");
    }
  };

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
                <form onSubmit={handleSubmit}>
                    <h2 className="App-description-sub-title">Let's keep in touch</h2>
                    <h4>Join the newsletter to get monthly updates on my game development, new releases, and special offers.</h4>
                    <PopupMessage message={popupMessage} onClose={() => setPopupMessage("")}/>
                    <div className="App-newsletter-email">
                        <input className="App-newsletter-email-input" type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        <input className="App-newsletter-email-button" type="submit" value="Subscribe"></input>
                    </div>
                    <p className="App-newsletter-email-message">No spam. 1 email per month. Unsubscribe anytime.</p>
                </form>
            </section>

                {/* TODO: Write 4 sections on the game */}
                {/* <h2 className="App-description-sub-title">War tactics and great battles based on army blocks and shield walls</h2> */}
            
        </>
    );
}

export default LinerthaDescription;

