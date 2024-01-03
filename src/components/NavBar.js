import { Button, ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { BUTTON_ICON_MARGIN_RIGHT } from "../constants/constants.js";

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
            <ButtonGroup variant="text" className='NavBarButtonGroup NewContentBody' fullWidth>
                <Button component={Link} to="/" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                    variant='fill' startIcon={<DashboardSharpIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />} 
                    fullWidth>
                    Home
                </Button>
                <Button component={Link} to="/#ProfessionalWorkSection" onClick={() => document.getElementById('ProfessionalWorkSection').scrollIntoView()} color="primary" className='NavBarButton width100'
                    
                    variant='fill' startIcon={<CasinoSharpIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />} fullWidth>
                    Professional Work
                </Button>
                <Button component={Link} to="/#PersonalProjectsSection" onClick={() => document.getElementById('PersonalProjectsSection').scrollIntoView()} color="primary" className='NavBarButton width100'
                    
                    variant='fill' startIcon={<EngineeringSharpIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />} fullWidth>
                    Personal Projects
                </Button>
                <Button component={Link} to="/AboutMe" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton'
                    
                    variant='fill' startIcon={<AccountBoxSharpIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />} fullWidth>
                    About & Resume
                </Button>
            </ButtonGroup>
        </div >
    );
}

export { NavBar };