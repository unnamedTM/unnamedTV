import React, { useState } from 'react';
import './App.css';

import { ReactComponent as ULogoV1 } from './img/ul-w-v3.svg';
import { ReactComponent as ULogoV2 } from './img/m-l-v2.svg';
import { ReactComponent as PlusIcon } from './img/plus.svg';
// import Apollo from './img/apollo.png';
import './comps/carousel-profile'
import ProfilesCarousel from './comps/carousel-profile';
import alex from './img/alex.png';
import kappa from './img/haha.jpg';
import lingduck from './img/dimitri.jpg'
import SimpleSlider from "./comps/bootstrap-carousel";
function App() {

	const [rotatePlus, setRotatePlus] = useState(false);

	const handleRotate = () => setRotatePlus(!rotatePlus);

	const rotate = rotatePlus ? "rotate(225deg)" : "rotate(0)"


	return (
    <div className="App">
      <div className="main">
        <header className="navbar">
          <div className="heightDiv">
            <a href="/" id="navbar-logo">
              <ULogoV1 id="navbar-logo" />
            </a>
            <a href="/" id="navbar-logo-v2">
              <ULogoV2 id="navbar-logo-v2" />
            </a>
            <div className="plus-div">
              <PlusIcon
                id="navbar-plus"
                style={{
                  transform: rotate,
                  transition: "all 0.2s linear",
                  height: "35px",
                  width: "55px",
                }}
                onClick={handleRotate}
              />
            </div>
          </div>
        </header>
        {/* <img className="homepage-img" src={Apollo} alt=""/> */}

        <div className="h-info">
          <h1 id="BigFont">Welcome 👋</h1>
          <h3>Summarry</h3>
          <hr id="website-width" style={{ width: "100%" }} />
          <p id="">
            Welcome to{" "}
            <a href="/aboutus">
              <b>unnamedSoftware</b>
            </a>{" "}
            we are a small team with a big purpose
            <br /> We have members, programmers from all over the{" "}
            <a href="/members">
              <b>globe</b>
            </a>
            🌏
            <br /> Some importnant members are shown down bellow
            <br /> Please support them with their personal <br /> projects and
            endevors!
          </p>
          <hr id="website-width" style={{ width: "40%" }} />
        </div>

        <div className="profiles-carusel">
          <h1 id="BigFont">Founders 💼</h1>
          <div className="profiles-div"></div>
        </div>
       
        <SimpleSlider />
      </div>
      <footer className="footer">
        <div>
          <h1>Unnamed Software™</h1>
          <h1>Being cool since 2020 😎</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
