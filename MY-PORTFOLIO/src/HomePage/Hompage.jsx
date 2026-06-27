import "./Hompage.css";
import CountUp from "./CountUp";

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

      <div className="hud-container">
        <div className="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>

          <div className="hud-content">
            <div className="hud-title">Projects</div>
            <CountUp target={3} />
          </div>
        </div>

        <div className="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>
          <div className="hud-content">
            <div className="hud-title">Completed Projects</div>
            <CountUp target={2} />
          </div>
        </div>

        <div className="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>
          <div className="hud-content">
            <div className="hud-title">Deployments</div>
            <CountUp target={500} suffix="+" />
          </div>
        </div>

        <div className="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>
          <div className="hud-content">
            <div className="hud-title">Expenses</div>
            <CountUp target={1000} prefix="$" suffix="+" />
          </div>
        </div>
      </div>

      <div className="about-me-container">
        <div className="about-me">
          <div className="about-me-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#ffffff"
                d="M112 320C112 205.1 205.1 112 320 112C383.1 112 439.6 140.1 477.8 184.5C486.4 194.6 501.6 195.7 511.6 187.1C521.6 178.5 522.8 163.3 514.2 153.3C467.3 98.6 397.7 64 320 64C178.6 64 64 178.6 64 320L64 360C64 373.3 74.7 384 88 384C101.3 384 112 373.3 112 360L112 320zM570.5 267.1C567.8 254.1 555 245.8 542.1 248.6C529.2 251.4 520.8 264.1 523.6 277C526.5 290.9 528.1 305.3 528.1 320.1L528.1 360.1C528.1 373.4 538.8 384.1 552.1 384.1C565.4 384.1 576.1 373.4 576.1 360.1L576.1 320.1C576.1 302 574.2 284.3 570.6 267.2zM320 144C301 144 282.6 147 265.5 152.6C250.3 157.6 246.8 176.3 257.2 188.5C264.3 196.8 276 199.3 286.6 196.4C297.2 193.5 308.4 192 320 192C390.7 192 448 249.3 448 320L448 344.9C448 370.1 446.5 395.2 443.6 420.2C441.9 434.8 453 448 467.8 448C479.6 448 489.7 439.4 491.1 427.7C494.4 400.3 496.1 372.7 496.1 345L496.1 320.1C496.1 222.9 417.3 144.1 320.1 144.1zM214.7 212.7C205.6 202.1 189.4 201.3 180.8 212.3C157.7 242.1 144 279.4 144 320L144 344.9C144 369.1 141.4 393.3 136.2 416.8C132.8 432.4 144.1 447.9 160.1 447.9C170.6 447.9 180 440.9 182.3 430.6C188.7 402.5 192 373.8 192 344.8L192 319.9C192 292.7 200.5 267.5 214.9 246.8C222.1 236.4 222.9 222.2 214.7 212.6zM320 224C267 224 224 267 224 320L224 344.9C224 380.8 219.4 416.4 210.2 451C206.4 465.3 216.9 480 231.7 480C241.2 480 249.6 473.8 252.1 464.6C262.6 425.6 268 385.4 268 344.9L268 320C268 291.3 291.3 268 320 268C348.7 268 372 291.3 372 320L372 344.9C372 381.2 368.5 417.3 361.6 452.8C358.9 466.7 369.3 480 383.4 480C393.6 480 402.4 473 404.4 463C412.1 424.2 416 384.7 416 344.9L416 320C416 267 373 224 320 224zM344 320C344 306.7 333.3 296 320 296C306.7 296 296 306.7 296 320L296 344.9C296 404.8 285 464.2 263.5 520.1L257.6 535.4C252.8 547.8 259 561.7 271.4 566.4C283.8 571.1 297.7 565 302.4 552.6L308.3 537.3C331.9 475.9 344 410.7 344 344.9L344 320z"
              />
            </svg>

            <p>IDENTITY ANALYSIS</p>
          </div>
          <p className="about-me-description">
            Operating at the intersection of high-concurrency systems and
            immersive front-end architecture. My core directive is the
            translation of complex data into intuitive, high-performance
            interfaces.
          </p>

          <div className="about-me-other-descriptions">
            <div className="hud-card">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>

              <div className="hud-content">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://w3.org"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="3"
                    fill="#1E293B"
                    stroke="#E2E8F0"
                    stroke-width="2"
                  />

                  <line
                    x1="2"
                    y1="9"
                    x2="22"
                    y2="9"
                    stroke="#E2E8F0"
                    stroke-width="1.5"
                  />

                  <path
                    d="M6 12L9 14.5L6 17"
                    stroke="#E2E8F0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <line
                    x1="11"
                    y1="17"
                    x2="15"
                    y2="17"
                    stroke="#E2E8F0"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <p className="about-me-other-descriptions-p">
              <p>Specialization</p>
              <p>Web & App Frontend Development (UI/UX)</p>
            </p>
          </div>

          <div className="about-me-other-descriptions">
            <div className="hud-card">
              <div class="corner top-left"></div>
              <div class="corner bottom-right"></div>

              <div className="hud-content">
                <svg
                  width="50%"
                  height="50%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://w3.org"
                >
                  <path
                    d="M9 6L3 12L9 18"
                    stroke="#E2E8F0"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M15 6L21 12L15 18"
                    stroke="#E2E8F0"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p className="about-me-other-descriptions-p">
              <p>Environment</p>
              <p>Vs Code,Expo</p>
            </p>
          </div>
        </div>
      </div>

      
      <div className="about-me-skills-main-container">
        <h2 className="about-me-skills-header">SKILLS AND KNOWLEDGE</h2>
        <div className="about-me-skills-container">
          <div className="about-me-skills-hud-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-skills-wrapper">
              <div className="about-me-skills-svg-and-number">
                <svg
                  xmlns="http://w3.org"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="12"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="50"
                    y1="38"
                    x2="50"
                    y2="24"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="50"
                    cy="18"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="61.4"
                    y1="46.3"
                    x2="74.7"
                    y2="42.0"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="79.5"
                    cy="40.4"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="57.1"
                    y1="59.7"
                    x2="65.3"
                    y2="71.1"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="68.2"
                    cy="75.2"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="42.9"
                    y1="59.7"
                    x2="34.7"
                    y2="71.1"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="31.8"
                    cy="75.2"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="38.6"
                    y1="46.3"
                    x2="25.3"
                    y2="42.0"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="20.5"
                    cy="40.4"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />
                </svg>
                <p>[01]</p>
              </div>
              <h2>FRONTEND ARCHITECTURE (Web)</h2>
              <div className="about-me-skills-loader"></div>
              <div className="about-me-skills-tools">
                <div>React</div>
                <div>Vite</div>
                <div>Css</div>
                <div>GitHub</div>
              </div>
            </div>
          </div>

          <div className="about-me-skills-hud-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-skills-wrapper">
              <div className="about-me-skills-svg-and-number">
                <svg
                  xmlns="http://w3.org"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="12"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="50"
                    y1="38"
                    x2="50"
                    y2="24"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="50"
                    cy="18"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="61.4"
                    y1="46.3"
                    x2="74.7"
                    y2="42.0"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="79.5"
                    cy="40.4"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="57.1"
                    y1="59.7"
                    x2="65.3"
                    y2="71.1"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="68.2"
                    cy="75.2"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="42.9"
                    y1="59.7"
                    x2="34.7"
                    y2="71.1"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="31.8"
                    cy="75.2"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />

                  <line
                    x1="38.6"
                    y1="46.3"
                    x2="25.3"
                    y2="42.0"
                    stroke="white"
                    stroke-width="4"
                  />
                  <circle
                    cx="20.5"
                    cy="40.4"
                    r="6"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />
                </svg>
                <p>[02]</p>
              </div>
              <h2>FRONTEND ARCHITECTURE (App)</h2>
              <div className="about-me-skills-loader"></div>
              <div className="about-me-skills-tools">
                <div>Native</div>
                <div>Expo</div>
                <div>Css</div>
                <div>GitHub</div>
              </div>
            </div>
          </div>

          <div className="about-me-skills-hud-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-skills-wrapper">
              <div className="about-me-skills-svg-and-number">
                <svg
                  xmlns="http://w3.org"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <path
                    d="M 20,30 L 50,18 L 80,30 L 50,42 Z"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M 20,48 L 50,60 L 80,48"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M 20,54 L 50,66 L 80,54"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M 32,74 C 32,70 68,70 68,74 C 68,78 32,78 32,74"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M 32,74 L 32,86 C 32,90 68,90 68,86 L 68,74"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>[03]</p>
              </div>
              <h2>BACKEND ARCHITECTURE (Web)</h2>
              <div className="about-me-skills-loader"></div>
              <div className="about-me-skills-tools">
                <div>Node</div>
                <div>Express</div>
                <div>GitHub</div>
              </div>
            </div>
          </div>

          <div className="about-me-skills-hud-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-skills-wrapper">
              <div className="about-me-skills-svg-and-number">
                <svg
                  xmlns="http://w3.org"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <path
                    d="M 25,30 C 25,20 75,20 75,30 C 75,40 25,40 25,30 Z"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M 25,30 L 25,54 C 25,64 75,64 75,54 L 75,30"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M 25,54 C 25,44 75,44 75,54"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />

                  <path
                    d="M 25,54 L 25,78 C 25,88 75,88 75,78 L 75,54"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M 25,78 C 25,68 75,68 75,78"
                    fill="none"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>[04]</p>
              </div>
              <h2>DATABASE ARCHITECTURE</h2>
              <div className="about-me-skills-loader"></div>
              <div className="about-me-skills-tools">
                <div>MySql</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
