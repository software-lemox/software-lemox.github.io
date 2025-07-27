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

                <h1>Title 1</h1>

                <p>This is more information about LINERTHA...</p>


                <h1>Title 1</h1>

                <p>This is more information about LINERTHA...</p>


                <h1>Title 1</h1>

                <p>This is more information about LINERTHA...</p>

            </section>
        </>
    );
}

export default LinerthaDescription;

