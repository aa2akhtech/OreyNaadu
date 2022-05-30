/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Alert from '../Alert';
// import PropTypes from 'prop-types'

const Content = () => (
  <React.Fragment>
    <header>
      <div className="navigation-container">
        <div className="top-head">
          <div className="web-name">
            <img src="images/logo.png" alt="oreynaadu" />
            <span className="brand-name">
              <h1>OREY NAADU</h1>
            </span>
          </div>

          <div className="ham-btn">
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </div>

          <div className="times-btn">
            <span>
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>

        <div className="nav-bar" id="nav-bar">
          <nav>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">current affairs</a>
              </li>
              <li>
                <a href="#">archive</a>
              </li>
              <li>
                <a href="#">featured</a>
              </li>
              <li>
                <a href="#">broadcast</a>
              </li>
              <li>
                <a href="#">category</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/OreyNaadu" target="blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Oreynaadu_TN" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/OreyNaadu"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" target="blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section className="banner">
      <div className="banner-main-content">
        <h2>GET THE INDIA's LATEST BREAKING NEWS</h2>
        <h3>India's Leading Breaking News Portal</h3>
  export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };
    return (
        <div>
            <h1 className="title">Upload an Image</h1>
            <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" />
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input"
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
}

        <button>
          <a href="#">Know More edited</a>
        </button>

        <div className="current-news-head">
          <h3>
            ”செந்தமிழ் நாடெனும் போதினிலே” தமிழில் உரையை தொடங்கிய மோடி..!{" "}
            <span id="time1"></span>
          </h3>

          <h3>
            பிரதமர் மோடியின் சென்னை வருகை; பல்வேறு திட்டங்களுக்கு அடிக்கல்
            நாட்டுகிறார்.<span id="time2"></span>
          </h3>

          <h3>
            மத்திய அரசு செய்துவிட்டது, திராவிட மாடல் செய்யுமா? எச்.ராஜா கேள்வி.{" "}
            <span id="time3"></span>
          </h3>

          <h3>
            பெட்ரோல், டீசல் விலை; 72 மணி நேரம் தான் கெடு - அரசுக்கு அண்ணாமலை
            எச்சரிக்கை.<span id="time4"></span>
          </h3>
        </div>
      </div>

      <div className="banner-sub-content">
        <div className="hot-topic">
          <div className="hot-topic-content">
            <h2>
              மாண்புமிகு பாரத பிரதமர் திரு.நரேந்திர மோடி அவர்கள் இன்று
              தமிழகத்தில் பல்வேறு நலத்திட்டங்களை துவக்கி வைக்கிறார்.
            </h2>

            <h3>
              <span id="time5"></span>
            </h3>
            <p>First line of paragraph....</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="hot-topic">
          <div className="hot-topic-content">
            <h2>
              மாண்புமிகு பாரத பிரதமர் திரு.நரேந்திர மோடி அவர்கள் இன்று
              தமிழகத்தில் பல்வேறு நலத்திட்டங்களை துவக்கி வைக்கிறார்.
            </h2>

            <h3>
              <span id="time6"></span>
            </h3>
            <p>First line of paragraph....</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="hot-topic">
          <div className="hot-topic-content">
            <h2>
              மாண்புமிகு பாரத பிரதமர் திரு.நரேந்திர மோடி அவர்கள் இன்று
              தமிழகத்தில் பல்வேறு நலத்திட்டங்களை துவக்கி வைக்கிறார்.
            </h2>

            <h3>
              <span id="time7"></span>
            </h3>
            <p>First line of paragraph....</p>
            <a href="#">Read More</a>
          </div>
        </div>

        <div className="hot-topic">
          <div className="hot-topic-content">
            <a href="#">Know More</a>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <main>
      <section className="main-container">
        <h2>Latest Stories</h2>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              ”செந்தமிழ் நாடெனும் போதினிலே” தமிழில் உரையை தொடங்கிய மோடி..!
            </h2>

            <p>
              தமிழகத்தில் 31 ஆயிரத்து 400 கோடி மதிப்பிலான 11 திட்டங்களை தொடங்கி
              வைத்த பிரதமர் மோடி அதனை தொடர்ந்து மக்கள் மத்தியில் உரையாற்றினார்.
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              Modi on Stage, CM Stalin Pitches for Tamil, Demands it be Declared
              Official Language at Centre
            </h2>

            <p>
              The chief minister made the comment during a speech welcoming
              Prime Minister Narendra Modi on his arrival in Chennai
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              BJP chief Annamalai lashes out at Stalin over 'political drama' at
              PM Modi event
            </h2>

            <p>
              Tamil should be the official language of Madras High Court and
              Union government offices in the state, Tamil Nadu Chief Minister
              MK Stalin said.
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              தமிழ்நாடு பயணம் மறக்க முடியாதது.. பாரத் மாதா கிஜே என பாஜகவினர்
              முழங்கும் வீடியோ பகிர்ந்து மோடி நன்றி
            </h2>

            <p>
              சென்னை வந்த பிரதமர் நரேந்திர மோடி ரூ.31,400 கோடி மதிப்பிலான
              பல்வேறு திட்டங்களை தொடங்கி வைத்தார்.
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              UAE புதிய அதிபர் ஷேக் முகமது பின் சயீத்துக்கு பிரதமர் மோடி
              வாழ்த்து{" "}
            </h2>

            <p>
              ஐக்கிய அரபு அமீரகத்தின் அதிபராக தேர்ந்தெடுக்கப்பட்ட ஆட்சியாளர்
              ஷேக் முகமது பின் சயீத் அல் நஹ்யானின் தலைமையில் இந்தியாவுடான உறவு
              தொடர்ந்து மேம்படும் என்று பிரதமர் மோடி நம்பிக்கை தெரிவித்துள்ளார்
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              UAE புதிய அதிபர் ஷேக் முகமது பின் சயீத்துக்கு பிரதமர் மோடி
              வாழ்த்து{" "}
            </h2>

            <p>
              ஐக்கிய அரபு அமீரகத்தின் அதிபராக தேர்ந்தெடுக்கப்பட்ட ஆட்சியாளர்
              ஷேக் முகமது பின் சயீத் அல் நஹ்யானின் தலைமையில் இந்தியாவுடான உறவு
              தொடர்ந்து மேம்படும் என்று பிரதமர் மோடி நம்பிக்கை தெரிவித்துள்ளார்
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              UAE புதிய அதிபர் ஷேக் முகமது பின் சயீத்துக்கு பிரதமர் மோடி
              வாழ்த்து{" "}
            </h2>

            <p>
              ஐக்கிய அரபு அமீரகத்தின் அதிபராக தேர்ந்தெடுக்கப்பட்ட ஆட்சியாளர்
              ஷேக் முகமது பின் சயீத் அல் நஹ்யானின் தலைமையில் இந்தியாவுடான உறவு
              தொடர்ந்து மேம்படும் என்று பிரதமர் மோடி நம்பிக்கை தெரிவித்துள்ளார்
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              UAE புதிய அதிபர் ஷேக் முகமது பின் சயீத்துக்கு பிரதமர் மோடி
              வாழ்த்து{" "}
            </h2>

            <p>
              ஐக்கிய அரபு அமீரகத்தின் அதிபராக தேர்ந்தெடுக்கப்பட்ட ஆட்சியாளர்
              ஷேக் முகமது பின் சயீத் அல் நஹ்யானின் தலைமையில் இந்தியாவுடான உறவு
              தொடர்ந்து மேம்படும் என்று பிரதமர் மோடி நம்பிக்கை தெரிவித்துள்ளார்
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              UAE புதிய அதிபர் ஷேக் முகமது பின் சயீத்துக்கு பிரதமர் மோடி
              வாழ்த்து{" "}
            </h2>

            <p>
              ஐக்கிய அரபு அமீரகத்தின் அதிபராக தேர்ந்தெடுக்கப்பட்ட ஆட்சியாளர்
              ஷேக் முகமது பின் சயீத் அல் நஹ்யானின் தலைமையில் இந்தியாவுடான உறவு
              தொடர்ந்து மேம்படும் என்று பிரதமர் மோடி நம்பிக்கை தெரிவித்துள்ளார்
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              UAE புதிய அதிபர் ஷேக் முகமது பின் சயீத்துக்கு பிரதமர் மோடி
              வாழ்த்து{" "}
            </h2>

            <p>
              ஐக்கிய அரபு அமீரகத்தின் அதிபராக தேர்ந்தெடுக்கப்பட்ட ஆட்சியாளர்
              ஷேக் முகமது பின் சயீத் அல் நஹ்யானின் தலைமையில் இந்தியாவுடான உறவு
              தொடர்ந்து மேம்படும் என்று பிரதமர் மோடி நம்பிக்கை தெரிவித்துள்ளார்
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src="images/Modi.jpg" />
        </article>
      </section>
    </main>
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h2>ஒரே நாடு | OREY NAADU</h2>
          <p>
            ஒரே நாடு - தமிழக பாரதிய ஜனதா கட்சியின் அதிகாரப்பூர்வ பத்திரிக்கை
          </p>
        </div>

        <div className="footer-right">
          <h2>Newsletter</h2>
          <p>
            Get the latest news, hot topic notifications, and exclusive gifts
            conveniently in your inbox!
          </p>

          <div>
            <input type="text" placeholder="Email Address" />
            <i className="fas fa-envelope"></i>
          </div>
        </div>
      </div>

      <p>
        created by&nbsp;<b>LOGIN</b>
      </p>
    </footer>
  </React.Fragment>
);

Content.propTypes = {};

export default Content;
