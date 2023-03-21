import ClubIc from "../../../Assets/ClubIc";
import ClubTx from "../../../Assets/ClubTx";
import Currency from "../../../Assets/Currency";
import Game from "../../../Assets/Game";
import Offer from "../../../Assets/Offer";
import Place from "../../../Assets/Place";
import Secure from "../../../Assets/Secure";
import Ticket from "../../../Assets/Ticket";
import Token from "../../../Assets/Token";
import WalletIc from "../../../Assets/WalletIc";
import WalletTx from "../../../Assets/WalletTx";
import Work from "../../../Assets/Work";
import "./SecWallet.css";

const SecWallet = () => {
  return (
    <>
      <div className="secWalletCon">
        <div className="secWallet">
          <div className="secWalletLeft">
            <div className="secWalletHead">
              <WalletIc />
              <WalletTx />
            </div>
            <div className="secWalletTitle">
              Your Everyday <br />
              Crypto Wallet
            </div>
            <div className="walletFeturesOne featuresMarginLg">
              <div className="features fetuColorOne">
                <div className="featuresIc">
                  <Currency />
                </div>
                <div className="featuresTx">
                  Use across <br />
                  any app
                  <br />
                  or currency <br />
                </div>
              </div>
              <div className="features fetuColorTwo">
                <div className="featuresIc">
                  <Place />
                </div>
                <div className="featuresTx">
                  One place for
                  <br />
                  all your Web3
                  <br />
                  Possessions <br />
                </div>
              </div>
            </div>
            <div className="walletFeturesTwo">
              <div className="features fetuColorOne">
                <div className="featuresIc">
                  <Secure />
                </div>
                <div className="featuresTx">
                  Simple <br />
                  and secure
                </div>
              </div>
              <div className="features fetuColorTwo">
                <div className="featuresIc">
                  <Work />
                </div>
                <div className="featuresTx">
                  Works
                  <br />
                  everywhere
                </div>
              </div>
            </div>
          </div>
          <div className="secWalletRight">
            <div className="secWalletHead">
              <ClubIc />
              <ClubTx />
            </div>
            <div className="secWalletTitle secWalletTitleColor">
              Exclusive For You And <br />
              Your Community
            </div>
            <div className="walletFeturesTwo featuresMargin">
              <div className="features fetuColorOne">
                <div className="featuresIc">
                  <Game />
                </div>
                <div className="featuresTx">
                Chat<br/> play games<br/> and host events
                </div>
              </div>
              <div className="features fetuColorTwo">
                <div className="featuresIc">
                  <Token />
                </div>
                <div className="featuresTx">
                Create your own  DAO and Tokens in 1 click
                </div>
              </div>
            </div>
            <div className="walletFeturesOne">
              <div className="features fetuColorOne">
                <div className="featuresIc">
                  <Ticket />
                </div>
                <div className="featuresTx">
                Create eco-friendly NFT artwork and tickets 
                </div>
              </div>
              <div className="features fetuColorTwo">
                <div className="featuresIc">
                  <Offer />
                </div>
                <div className="featuresTx">
                Offer exclusive content and NFT memberships
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecWallet;
