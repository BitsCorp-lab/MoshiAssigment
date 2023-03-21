import AssasianLeft from "../../../Assets/AssasianLeft";
import AssasianRight from "../../../Assets/AssasianRight";
import Mask from "../../../Assets/Mask.png";
import "./SecPlay.css";
const SecPlay = () => {
  return (
    <>
      <div className="secPlayCon">
        <div className="secPlay">
          <div className="leftTree">
            <AssasianLeft />
          </div>

          <div className="secPlayMid">
            <div className="secPlayHead">THUNKIBLES</div>
            <div className="secPlaySubHead">Play 2 Earn Game</div>
            <div className="secPlayTitle">9999 Tanuki NFTs up for grabs</div>
            <button className="secPlayBtn">LEARN MORE</button>
          </div>
          <div className="rightTree">
            <AssasianRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecPlay;
