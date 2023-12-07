import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import profilePicture from '../resources/images/Jerry_Davis_Portrait_2023b.png';
import SWPicture from '../resources/images/SWCreatorLogo.png';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import { Resume } from './Resume';
import { ContactMe } from './ContactMe';
import { HighlightShortcut } from './HighlightShortcut';

function Dashboard() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <br /><br />
                    <Link to='/SWWLevelingOverhaul'>
                        <div className="ImageOverflowWrapper">
                            <img className='ImageDynamicZoom' src={SWPicture} width="95%" alt="Silverwind Workshop" />
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <br />
                    <p className="HeaderTitleNoHover">
                        <p>
                            <DashboardSharpIcon fontSize='inherit' />JERRY DAVIS
                        </p>
                    </p>
                    <div className="NormalPageLayoutLeft">
                        Hello there, my name is Jerry Davis and I'm a Game Designer and Software Engineer.
                        <p>
                            As a Game Designer, I created Silverwind Workshop, an independent Dungeons & Dragons 5th Edition content
                            creator which uses game design principles, player feedback & testing, and a focus on User Experience to enrich
                            the gameplay of D&D.
                            <br />My work is published on the popular online virtual
                            tabletop provider, Roll20.
                        </p>
                        <p>
                            As a software engineer, I've worked more than 2 years for Infosys as a Blueshield of California contracter on a large
                            code base that serves 4.5 million users and 65,000 physicians. I have a proven track record and several
                            awards from my time working for Blueshield of California.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={3.5}>
                    <br /><br />
                    <div className="ImageOverflowWrapper">
                        <img className='ProfileImage ImageDynamicZoom' src={profilePicture} width="60%" alt="Profile" />
                    </div>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <ContactMe />
                    </Grid>
                    <Grid item xs={0.5} />
                    <Grid item xs={3}>
                        <HighlightShortcut />
                        <br />
                        <p className="HeaderTitleNoHover">
                            <p>
                                <DashboardSharpIcon fontSize='inherit' />CONTRIBUTIONS
                            </p>
                        </p>
                            100% unless otherwise specified.
                            <br/>This website was created entirely from scratch using React, JavaScript, CSS, and HTML and is hosted on Microsoft Azure.
                    </Grid>
                    <Grid item xs={0.25} />
                    <Grid item xs={3}>
                        <Resume />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export { Dashboard };