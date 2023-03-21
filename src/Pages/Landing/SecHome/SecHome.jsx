import Circle from "../../../Assets/Circle";
import PersonSvg from "../../../Assets/PersonSvg";
import Stars from "../../../Assets/Stars";
import LandingLayout from "../../../Layouts/LandingLayout";
import "./SecHome.css";

const SecHome = () => {
  return (
    <>
      <div className="homeCon">
        <div className="homeRight">
            <div className="comQuote">
                THE WEB3 <br/>
                PLATFORM BUILT <br/>
                FOR YOU <br/>
            </div>
          <div className="svgGrp">
            <div className="circleSvg">
              <Circle />
            </div>

            <div className="starsSvg">
              <Stars />
            </div>

            
          </div>

          <div className="contactGrp">
            <p className="contact">SkyClub</p>
            <p className="contact">SkyWallet</p>
            <p className="contact">ContactNow</p>
          </div>
        </div>
        <div className="personSvg">
              <PersonSvg/>
            </div>
      </div>
    </>
  );
};

export default SecHome;
