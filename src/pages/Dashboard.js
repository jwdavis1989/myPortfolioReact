import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import profilePicture from '../resources/images/Jerry_Davis_Portrait_2023b.png';
import SWPicture from '../resources/images/SWCreatorLogo.png';
import { Grid } from '@mui/material';

function Dashboard() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <br /><br />
                    <img className='ImageBorder' src={SWPicture} width="95%" alt="Silverwind Workshop" />
                </Grid>
                <Grid item xs={4}>
                    <br />
                    <p className="HeaderTitleNoHover">
                        <p>
                            <DashboardSharpIcon fontSize='inherit' />JEREMY DAVIS
                        </p>
                    </p>
                    <div className="NormalPageLayoutLeft">
                        Hello there, my name is Jeremy Davis and I'm a Game Designer and Software Engineer.
                        <p>
                            As a Game Designer, I created Silverwind Workshop, an independent Dungeons & Dragons 5th Edition content
                            creator which uses game design principles, player feedback & testing, and a focus on User Experience to enrich
                            the gameplay of D&D.
                            <br />My work is published on the popular online virtual
                            tabletop provider, Roll20.
                        </p>
                        <p>
                            As a software engineer, I've worked more than 2 years for Blueshield of California via Infosys on a large
                            code base that serves 4.5 million users and 65,000 physicians. I have a proven track record and several
                            awards from my time working for Blueshield of California.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <br /><br />
                    <img className='ProfileImage' src={profilePicture} width="60%" alt="Profile" />
                </Grid>
                <Grid item xs={12}>
                    <br />
                    
                </Grid>
            </Grid>
        </div>
    );
}

export { Dashboard };