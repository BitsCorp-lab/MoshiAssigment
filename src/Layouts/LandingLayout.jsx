import Navbar from "../Compoents/Navbar/Navbar";
import Scroller from "../Compoents/Scroller/Scroller";
import "./LandigLayout.css"

const LandingLayout = ({children}) => {
  return (
    <>
      <div className="layoutCon">
        <div className="navCon">
            <Navbar/>
        </div>
        <div className="pageCon">
            {children}
        </div>
        <Scroller/>
      </div>
    </>
  );
};

export default LandingLayout;
