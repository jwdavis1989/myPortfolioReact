import swwOverhaulLogo from "../resources/images/SW Skill Tree Logo Final 1024px.png";
import { Link } from "react-router-dom";
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';

function DungeonsAndDragonsContent() {
    return (
        <div className="NormalPageLayout">
            <p className="HeaderTitle">
            <CasinoSharpIcon fontSize='inherit'/> DUNGEONS AND DRAGONS CONTENT
            </p>
            <Link to='/SWWLevelingOverhaul'>
                <img src={swwOverhaulLogo} alt="Silverwind Workshop Banner" className="SWWBanner" />
            </Link>
            <Link to='/MapGenerator'>
                <img src={swwOverhaulLogo} alt="DnD Map Generator" className="SWWBanner" />
            </Link>
                
            {/*</Link>*/}
        </div>
    );
}

export { DungeonsAndDragonsContent };