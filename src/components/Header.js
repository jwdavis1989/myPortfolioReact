import { NavBar } from "./NavBar";
import { ButtonGroup, Grid, IconButton } from '@mui/material';
import glowingEyeLogo from "../resources/images/glowingEyeAnimation/glowingEyeAnimation.gif";
import gameDesignPDF from "../resources/handouts/Davis Jerry Game Developer Resume.pdf";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Header() {
    return (
        <div>
            <Grid id="Header Banner Section" container spacing={0} className="">
                    <Grid id="Row 1 Banner Components" container spacing={0} className="NewBanner">
                        <Grid item md={1} sm={2} xs={2}>
                            <img src={glowingEyeLogo} alt="Glowing Eye Icon" className='NewBannerLogo' />
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <b className="textColorBlue NewBannerText textFontSizeH1">
                                Jerry Davis
                            </b>
                            <br />
                            <b className="NewBannerSubtitle textFontSizeH4">
                                Game Developer and Software Engineer
                            </b>
                            <br /><br />
                        </Grid>
                        <Grid item md={2} sm={0} xs={0} />
                        <Grid item md={2} sm={2} xs={2}>
                            <ButtonGroup variant="fill" className="NewBannerLinks" orientation="horizontal" size="small">
                                <IconButton title="LinkedIn Profile">
                                    <a href="https://www.linkedin.com/in/jerry-davis-8991641b4/" target="_blank" rel="noreferrer">
                                        <LinkedInIcon alt="LinkedIn" className="" />
                                    </a>
                                </IconButton>
                                <IconButton title="Twitter/X">
                                    <a href="https://twitter.com/SilverwindWork1" target="_blank" rel="noreferrer">
                                        <TwitterIcon alt="Twitter/X" className="" />
                                    </a>
                                </IconButton>
                                <IconButton title="Resume">
                                    <a href={gameDesignPDF} target="_blank" rel="noreferrer">
                                        <PictureAsPdfIcon alt="Download Resume" className="" />
                                    </a>
                                </IconButton>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
            </Grid>
            <Grid id="Header Banner Section" container spacing={0} className="">
                <Grid item md={12} sm={12} xs={12}>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    );
}

export { Header };