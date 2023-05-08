import GamesSharpIcon from '@mui/icons-material/GamesSharp';
import DownloadIcon from '@mui/icons-material/Download';
import { Grid } from '@mui/material';
import MechShmupLink from "../resources/gamePrototypes/MechSchmup/ArcadeMechShootEmUpVersion03.exe";
import PhoenixWalkerTitleScreen from "../resources/images/gamePrototypes/gifs/PhoenixWalkerTitleScreen/PhoenixWalkerTitleScreen.gif";

function VideoGamePrototypes() {
    return (
        <div className="NormalPageLayout">
            <p className="HeaderTitleNoHover">
                <GamesSharpIcon fontSize='inherit' /> VIDEO GAME PROTOTYPES
            </p>
            <h1 className="textFontPixel">
                PHOENIX WALKER
            </h1>
            <Grid container spacing={1}>
            <Grid item xs={4}/>
                <Grid item xs={4}>
                    <img src={PhoenixWalkerTitleScreen} width="100%" alt='Phoenix Walker' className="SWWBanner"></img>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
            <Grid item xs={4}/>
                <Grid item xs={4}>
                    <a href={MechShmupLink} className="HeaderTitle" target="_blank" rel="noreferrer">
                        <DownloadIcon fontSize='inherit' /> DOWNLOAD INSTALLER
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export { VideoGamePrototypes };