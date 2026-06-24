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
          <p>WEB AND APP DEVELOPER (UI/UX)_</p> 
          <span class="cursor-pipe">|</span>
        </div>

        <div class="piano-roll">
          <div class="note long"></div>
          <div class="note short"></div>
          <div class="note long"></div>
        </div>
      </div>
    </>
  );
}
