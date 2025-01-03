import "../styles/Main.css";

import gloc from "../images/gloc-9.jpg";
import hev from "../images/hev-abi.jpg";
import skusta from "../images/skusta-clee.png";
import zack from "../images/zack-tabudlo.jpg";

export default function Main() {
	return (
		<div className="landing-section">  
			<div className="reveals">
        <div className="reveal r-1"></div>
        <div className="reveal r-2"></div>
      </div>

      <div className="images">
        <div className="img main"><img src={gloc} /></div>
        <div className="img main"><img src={skusta} /></div>
        <div className="img main"><img src={zack} /></div>
      </div>

      <div className="hero-content">
        <div className="site-logo">
          <div className="word"><h1>YY</h1></div>
          <div className="word"><h1>Entertainment<sup>&copy;</sup></h1></div>
        </div>

        <div className="nav">
          <div class="nav-item"><p>About</p></div>
          <div class="nav-item"><p>Events</p></div>
          <div class="nav-item"><p>Contact</p></div>
          <div class="nav-item"><p>Login</p></div>
        </div>

        <div class="cover-img">
          <img src={hev} />  
        </div>

        <div class="site-info">
          <div class="row">
            <div class="col">
              <div class="line"><p>Feature Events:</p></div>
            </div>
            <div class="col">
              <h2>
                YY Entertainment brings and gather around famous artist to
                Saskatoon for the people to watch.
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <div class="address">
                <div class="line"><p>YY Ltd.</p></div>
                <div class="line"><p>Saskatoon Building</p></div>
                <div class="line"><p>- 123 Main Street</p></div>
                <div class="line"><p>S1P 5A9</p></div>
              </div>
              <div class="socials">
                <div class="line"><p>Medias:</p></div>
                <br />
                <div class="line"><p>Facebook</p></div>
                <div class="line"><p>Instagram</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
}