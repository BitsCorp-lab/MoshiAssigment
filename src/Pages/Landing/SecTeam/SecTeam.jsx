import { useState } from "react";
import TeamGrid from "../../../Assets/TeamGrid";
import Carousel from "../../../Compoents/Carousel/Carousel";
import "./SecTeam.css";
import LeftArrow from "../../../Assets/LeftArrow";
import RightArrow from "../../../Assets/RightArrow";
let initialPos = 0;
const SecTeam = () => {
  const [corPos, setCorPos] = useState(0);

  const handleNext = (event) => {
    setCorPos(corPos + 1);
  };
  const handlePrev = () => {
    setCorPos(corPos - 1)
  }
  return (
    <div className="secTeamCon">
      <div className="secTeam">
        <div className="secTeamHeader">
          <div className="secTeamHead">The metasky Team</div>
          <div className="navArrow">
            <div onClick={handlePrev} className="prev">
              <LeftArrow />
            </div>
            <div onClick={handleNext} className="next">
              <RightArrow />{" "}
            </div>
          </div>
        </div>

        <div className="secTeamGrid">
          <TeamGrid />
          <div className="corCon">
            <Carousel corPosProp={corPos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTeam;
