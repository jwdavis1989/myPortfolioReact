import { NavBar } from "./NavBar";
import { ButtonGroup, Grid, IconButton } from '@mui/material';
import glowingEyeLogo from "../resources/images/glowingEyeAnimation/glowingEyeAnimation.gif";
import gameDesignPDF from "../resources/handouts/JerryDavisGameDevResume2023.pdf";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Header() {
    return (
        <div>
            <Grid id="Row 0 Banner" container spacing={0} className="">
                <Grid item md={2} sm={0} xs={0}/>
                <Grid item md={8} sm={12} xs={12} className="NewContentBody">
                    <Grid id="Row 1 Banner Components" container spacing={0} className="NewBanner">
                        <Grid item md={2} sm={1} xs={1}>
                            <img src={glowingEyeLogo} alt="Glowing Eye Icon" className='NewBannerLogo' />
                        </Grid>
                        <Grid item md={6} sm={5.5} xs={5}>
                            <h1 className="textColorBlue NewBannerText">
                                Jerry Davis
                            </h1>
                            <h2 className="NewBannerSubtitle">
                                Game Designer and Software Engineer
                            </h2>
                        </Grid>
                        <Grid item md={2} sm={2} xs={2} />
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
                        <Grid item md={0} sm={2} xs={2} />
                    </Grid>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    );
}

export { Header };