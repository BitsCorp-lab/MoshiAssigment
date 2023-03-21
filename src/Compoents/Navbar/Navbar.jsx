import CompanyName from "../../Assets/CompanyName";
import DiscordIc from "../../Assets/DiscordIc";
import InstagramIc from "../../Assets/InstagramIc";
import Logo from "../../Assets/Logo";
import TwitterIc from "../../Assets/TwitterIc";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navLeft">
          <div className="navLogo">
            <Logo />
          </div>
          <div className="compName">
            <CompanyName/>
          </div>
        </div>
        <div className="navRight">
            <div className="icGrp">
                <DiscordIc/>
                <TwitterIc/>
                <InstagramIc/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
