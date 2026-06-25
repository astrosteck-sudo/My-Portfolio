import "./Hompage.css";

export function Homepage() {
  return (
    <>
      <div className="homepage-opening">
        <div className="homepage-opening-image">
          <img src="./testiminial_1.jpg" alt="" />
        </div>
        <h2>EPISILION_SERVICES</h2>
        <div className="homepage-opening-description">
          <p>WEB AND APP DEVELOPER (UI/UX)</p>
          {/* <span class="cursor-pipe">|</span> */}
        </div>

        <div class="piano-roll">
          <div class="note long"></div>
          <div class="note short"></div>
          <div class="note long"></div>
        </div>
      </div>

      {/* <div className="short-description-container">
        <div>
          <p>Network Uptime</p>
          <p>99.9%</p>
        </div>
      </div> */}

      <div class="hud-container">
        <div class="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>

          <div class="hud-content">
            <div class="hud-title">NETWORK UPTIME</div>
            <div class="hud-value">99.9%</div>
          </div>
        </div>

        <div class="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>

          <div class="hud-content">
            <div class="hud-title">NETWORK UPTIME</div>
            <div class="hud-value">99.9%</div>
          </div>
        </div>

        <div class="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>

          <div class="hud-content">
            <div class="hud-title">NETWORK UPTIME</div>
            <div class="hud-value">99.9%</div>
          </div>
        </div>

        <div class="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>

          <div class="hud-content">
            <div class="hud-title">NETWORK UPTIME</div>
            <div class="hud-value">99.9%</div>
          </div>
        </div>
      </div>
    </>
  );
}
