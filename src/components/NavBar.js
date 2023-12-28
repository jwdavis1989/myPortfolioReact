import { Button, ButtonGroup, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants.js";

import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';

function NavBar() {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        const href = window.location.href.substring(
          window.location.href.lastIndexOf('#') + 1,
        );
        if (window.location.href.lastIndexOf('#') > 0) {
          document.getElementById(href)?.scrollIntoView();
        }
       });

    return (
        <div>
            <Grid id="Row 0 Banner" container spacing={0} className="NewContentBody" fullWidth>
                <Grid className="NewContentBody">
                    <ButtonGroup variant="text" className='NavBarButtonGroup' fullWidth>
                        <Button component={Link} to="/" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                            variant='fill' startIcon={<DashboardSharpIcon style={{ fontSize: BUTTON_ICON_SIZE}} />} style={{ fontSize: BUTTON_FONT_SIZE}}
                            fullWidth>
                            Home
                        </Button>
                        <Button component={Link} to="/#ProfessionalWorkSection" onClick={() => document.getElementById('ProfessionalWorkSection').scrollIntoView() } color="primary" className='NavBarButton width100'
                            style={{ fontSize: BUTTON_FONT_SIZE }}
                            variant='fill' startIcon={<CasinoSharpIcon style={{ fontSize: BUTTON_ICON_SIZE}} />} fullWidth>
                            Professional Work
                        </Button>
                        <Button component={Link} to="/#PersonalProjectsSection" onClick={() => document.getElementById('PersonalProjectsSection').scrollIntoView() } color="primary" className='NavBarButton width100'
                            style={{ fontSize: BUTTON_FONT_SIZE }}
                            variant='fill' startIcon={<EngineeringSharpIcon style={{ fontSize: BUTTON_ICON_SIZE}} />} fullWidth>
                            Personal Projects
                        </Button>
                        <Button component={Link} to="/AboutMe" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                            style={{ fontSize: BUTTON_FONT_SIZE }}
                            variant='fill' startIcon={<AccountBoxSharpIcon style={{ fontSize: BUTTON_ICON_SIZE}} />} fullWidth>
                            (WIP)About Me
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div >
    );
}

export { NavBar };