import SciStructure from "../../../Assets/SciStructure";
import "./SecAbout.css";

const SecAbout = () => {
  return (
    <>
      <div className="secAboutCon">
        <div className="secAbout">
          <div className="sciStructure">
            <SciStructure />
          </div>
          <div className="aboutContent">
            <div className="aboutHead">
              Communities are the <br /> lifeblood of society.
            </div>
            <div className="aboutTitle">
              Decentralised communities are going <br />
              to be the lifeblood of the metaverse. <br />
              <br /> Metasky aims to empower influencers,
              <br /> creators and brands to build happy, <br />
              motivated Web3 communities with a <br />
              strong sense of belongingness.
            </div>
          </div>
          <div className="aboutFooter">WEB3</div>
        </div>
      </div>
    </>
  );
};

export default SecAbout;
