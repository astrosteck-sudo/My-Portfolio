import "./Hompage.css";
import CountUp from "./CountUp";
import episilion_logo from "../assets/episilion_logo.jpg";
import flexPay26 from "../assets/flexPay26.png";
import classified from "../assets/classified.jpg";

export function Homepage() {
  return (
    <>
      <div className="homepage-opening">
        <div className="homepage-opening-image">
          <img src="./episilionLogo.jpg" alt="" />
        </div>
        <h2>EPISILION_SERVICES</h2>
        <div className="homepage-opening-description">
          <p>WEB AND APP DEVELOPMENT (UI/UX)</p>
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
          <div className="hud-content" id="about">
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
            <div className="hud-title">Happy Clients</div>
            <CountUp target={100} prefix="" suffix="" />
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

            <p>ABOUT EPISILION SERVICES</p>
          </div>
          <p className="about-me-description">
            Episilion Services is a software development company focused on
            building modern web applications, mobile apps, and digital solutions
            that help businesses and individuals achieve their goals. We
            prioritize clean design, scalable architecture, and user-centered
            experiences.
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
            <p className="about-me-other-descriptions-p" id="technologies">
              <p>Environment</p>
              <p>Vs Code,Expo</p>
            </p>
          </div>
        </div>
      </div>

      <div className="about-me-skills-main-container">
        <h2 className="about-me-skills-header">
          <svg
            xmlns="http://w3.org"
            viewBox="0 0 100 100"
            width="100"
            height="100"
          >
            <path
              d="M 22,24 L 50,14 L 78,24 L 78,56 C 78,74 50,88 50,88 C 50,88 22,74 22,56 Z"
              fill="none"
              stroke="white"
              stroke-width="4"
              stroke-linejoin="round"
            />

            <path
              d="M 38,50 L 47,59 L 64,36"
              fill="none"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>TECHNOLOGIES</p>
        </h2>
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
              <h2>BACKEND ARCHITECTURE</h2>
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

      <div className="about-me-episilion-services-container" id="services">
        <div className="about-me-episilion-services-header">
          <svg
            xmlns="http://w3.org"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>

          <p>SERVICES PROTOCOLS</p>
        </div>

        <div className="about-me-episilion-services-wrapper">
          <div className="about-me-episilion-services-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-episilion-services-card-content">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="25"
                height="25"
                fill="none"
                stroke="#a2b7ca"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <h2>WEBSITE DEVELOPMENT</h2>
              <p>
                High-performance, responsive front-end architectures using
                modern frameworks.
              </p>
            </div>
          </div>

          <div className="about-me-episilion-services-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-episilion-services-card-content">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18.01" stroke-width="3" />
              </svg>

              <h2>MOBILE APP DEVELOPMENT</h2>
              <p>
                Cross-platform mobile solutions optimized for native
                performance.
              </p>
            </div>
          </div>

          <div className="about-me-episilion-services-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-episilion-services-card-content">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="10" y1="12" x2="10.01" y2="12" stroke-width="3" />
                <line x1="12" y1="12" x2="12.01" y2="12" stroke-width="3" />
                <line x1="14" y1="12" x2="14.01" y2="12" stroke-width="3" />
              </svg>

              <h2>BACKEND/API DEVELOPMENT</h2>
              <p>Scalable server-side logic and robust API integrations.</p>
            </div>
          </div>

          <div className="about-me-episilion-services-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-episilion-services-card-content">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="6" y="7" width="12" height="11" rx="2" />

                <path d="M12 7V4" />
                <circle cx="12" cy="3" r="1" fill="currentColor" />

                <path d="M6 10H4v5h2" />
                <path d="M18 10h2v5h18" />

                <circle cx="10" cy="12" r="1.5" fill="currentColor" />
                <circle cx="14" cy="12" r="1.5" fill="currentColor" />
              </svg>

              <h2>AI INTEGRATION</h2>
              <p>
                Deploying neural networks and LLM-based features into existing
                ecosystems.
              </p>
            </div>
          </div>

          <div className="about-me-episilion-services-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-episilion-services-card-content">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7A5 5 0 0 1 7 7a5.32 5.32 0 0 1 3.5 1.4A6 6 0 0 1 21 13.5v1.5z" />

                <polyline points="9 13 12 10 15 13" />
                <line x1="12" y1="10" x2="12" y2="17" />
              </svg>

              <h2>CLOUD DEPLOYMENT</h2>
              <p>
                High-performance, responsive front-end architectures using
                modern frameworks.
              </p>
            </div>
          </div>

          <div className="about-me-episilion-services-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="about-me-episilion-services-card-content">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>

              <h2>MAINTENANCE & SUPPORT</h2>
              <p>Continuous monitoring, debugging, and system optimization.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me-team-container" id="team">
        <div className="about-me-team-header">
          <svg
            xmlns="http://w3.org"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            fill="none"
            stroke="#a2b7ca"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />

            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <p>TEAM MEMBERS</p>
        </div>

        <div className="about-me-team-wrapper">
          <div className="about-me-team-card">
            <div class="corner top-left"></div>
            <div class="corner bottom-right"></div>

            <div className="hud-content about-me-team-card-content">
              <img src="./testiminial_1.jpg" alt="" />
              <p>Founder & Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me-projects-main-container" id="projects">
        <div className="about-me-projects-header">
          <svg
            xmlns="http://w3.org"
            viewBox="0 0 100 100"
            width="100"
            height="100"
          >
            <path
              d="M 18,26 L 38,26 L 46,36 L 82,36 L 82,78 L 18,78 Z"
              fill="none"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <line
              x1="30"
              y1="50"
              x2="70"
              y2="50"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              x1="30"
              y1="62"
              x2="56"
              y2="62"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
          <p>PROJECTS</p>
        </div>
        <div className="about-me-projects-container">
          <div className="about-me-projects-card">
            <div className="about-me-projects-image">
              <img src={episilion_logo} alt="" />
            </div>
            <p className="about-me-projects-completed">COMPLETED</p>
            <h2>EPISILION HOSTELS</h2>
            <p className="about-me-projects-description">
              A platform designed to streamline hostel booking and management
              for students and travelers.
            </p>

            <a
              className="about-me-projects-svg"
              href="https://www.episilionhostels.com/"
              target="_blank"
            >
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <path
                  d="M 46,24 L 24,24 L 24,76 L 76,76 L 76,54"
                  fill="none"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <line
                  x1="46"
                  y1="54"
                  x2="74"
                  y2="26"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                />

                <path
                  d="M 58,24 L 76,24 L 76,42"
                  fill="none"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="about-me-projects-card">
            <div className="about-me-projects-image">
              <img src={flexPay26} alt="" />
            </div>
            <p className="about-me-projects-completed">COMPLETED</p>
            <h2>FLEXPAY26</h2>
            <p className="about-me-projects-description">
              A freeFire reseller site, to set diamonds cheaply.
            </p>

            <a
              className="about-me-projects-svg"
              href="https://flexpay26.vercel.app/"
              target="_blank"
            >
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <path
                  d="M 46,24 L 24,24 L 24,76 L 76,76 L 76,54"
                  fill="none"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <line
                  x1="46"
                  y1="54"
                  x2="74"
                  y2="26"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                />

                <path
                  d="M 58,24 L 76,24 L 76,42"
                  fill="none"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="about-me-projects-card">
            <div className="about-me-projects-image">
              <img src={classified} alt="" />
            </div>
            <p
              className="about-me-projects-completed"
              style={{
                color: "rgb(125, 37, 13)",
                backgroundColor: "rgba(255, 0, 0, 0.07)",
              }}
            >
              PENDING
            </p>
            <h2 style={{ color: "rgb(125, 37, 13)" }}>CLASSIFIED</h2>
            <p className="about-me-projects-description">
              Global decentralized asset management platform with real-time HUD
              analytics.
            </p>

            <a className="about-me-projects-svg">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <path
                  d="M 46,24 L 24,24 L 24,76 L 76,76 L 76,54"
                  fill="none"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <line
                  x1="46"
                  y1="54"
                  x2="74"
                  y2="26"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                />

                <path
                  d="M 58,24 L 76,24 L 76,42"
                  fill="none"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="about-me-contacts-container" id="contact">
        <div className="hud-card">
          <div class="corner top-left"></div>
          <div class="corner bottom-right"></div>
          <div className="about-me-contacts">
            <div className="about-me-contact-content">
              <h2>SECURE CHANNEL</h2>
              <p>
                Direct encrypted communication. Response latency typically
                before 24h.
              </p>

              <a
                href="mailto:paulfoli122@gmail.com?subject=Portfolio Inquiry"
                target="_blank"
              >
                <svg
                  xmlns="http://w3.org"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(185 202 203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <p>paulfoli122@gmail.com</p>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100093119115842"
                target="_blank"
              >
                <svg
                  xmlns="http://w3.org"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(185 202 203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <p>Paul Deon Foli</p>
              </a>
              <a>
                <svg
                  xmlns="http://w3.org"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(185 202 203)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p>0551604818</p>
              </a>
            </div>

            <iframe src="https://lottie.host/embed/854d2fb2-e5fa-4de7-8f99-f07bd883526a/u1gdSKQWqw.lottie"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
