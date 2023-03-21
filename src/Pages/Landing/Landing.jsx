import LandingLayout from "../../Layouts/LandingLayout"
import SecAbout from "./SecAbout/SecAbout"
import SecEnd from "./SecEnd/SecEnd"
import SecHome from "./SecHome/SecHome"
import SecOrg from "./SecOrg/SecOrg"
import SecPlay from "./SecPlay/SecPlay"
import SecTeam from "./SecTeam/SecTeam"
import SecWallet from "./SecWallet/SecWallet"

const Landing = () => {
    return(
        <>
        <LandingLayout>
            <SecHome/>
            <SecWallet/>
            <SecPlay/>
            <SecAbout/>
            <SecOrg/>
            <SecTeam/>
            <SecEnd/>
            
        </LandingLayout>
        </>
    )
}

export default Landing