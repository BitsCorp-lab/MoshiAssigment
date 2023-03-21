import KiteFlying from "../../../Assets/KiteFlying";
import endImg from "../../../Assets/endImg.jpg"
import "./SecEnd.css";
const SecEnd = () => {
  return (
    <div className="secEndCon">
      <div className="secEnd">
        <div className="kiteFly">
            <KiteFlying/>
        </div>
        <div className="btnGrp">
          <button className="btnTeam">JOIN THE TEAM</button>
          <button className="btnEnq">BUSINESS</button>
        </div>
        <div className="endImg">
            <img style={{width:"700px"}} src={endImg}/>
        </div>
      </div>
    </div>
  );
};

export default SecEnd;
