import CapsuleStructure from "../../../Assets/CapsuleStructure";
import GrpTxMid from "../../../Assets/GrpTxMid";
import GrpTxOne from "../../../Assets/GrpTxOne";
import GrpTxTwo from "../../../Assets/GrpTxTwo";
import OrgSvg from "../../../Assets/OrgSvg";
import "./SecOrg.css";
const SecOrg = () => {
  return (
    <>
      <div className="secOrgCon">
        <div className="secOrg">
          <div className="orgStr">
            <OrgSvg />
          </div>
          <div className="capsuleCon">
            <div className="capsuleOuter">
                <div className="curveTxOne">
                    <GrpTxOne/>
                </div>
              <div className="capsule">
                <div className="capsuleStr">
                  <CapsuleStructure />
                </div>
                <div className="capsulePerOne"></div>
                <div className="capsulePerTx">60%</div>
              </div>
              <div className="capsuleTx">COMMUNITY</div>
            </div>
            <div className="capsuleOuter">
            <div className="capsuleTx">COMMUNITY</div>
              <div className="capsule">
                <div className="capsuleStr">
                  <CapsuleStructure />
                </div>
                <div className="capsulePerTwo"></div>
                <div className="capsulePerTx">20%</div>
              </div>
                <div className="curveTxMid">
                    <GrpTxMid/>
                </div>
            </div>
            <div className="capsuleOuter">
                <div className="curveTxTwo">
                    <GrpTxTwo/>
                </div>
              <div className="capsule">
                <div className="capsuleStr">
                  <CapsuleStructure />
                </div>
                <div className="capsulePerTwo"></div>
                <div className="capsulePerTx">20%</div>
              </div>
              <div className="capsuleTx">COMMUNITY</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecOrg;
