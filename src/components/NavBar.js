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
        <div className="">
            {window.screen.width < 720 ?
                <ButtonGroup variant="outlined" className='NavBarButtonGroup' fullWidth>
                    <Button component={Link} to="/" onClick={() => window.scrollTo(0, 0)} className='NavBarButton width100'
                        fullWidth>
                        Home
                        <br />
                    </Button>
                    <Button component={Link} to="/#ProfessionalWorkSection" onClick={() => document.getElementById('ProfessionalWorkSection').scrollIntoView()} className='NavBarButton width100'
                        fullWidth>
                        Professional Work
                    </Button>
                    <Button component={Link} to="/#PersonalProjectsSection" onClick={() => document.getElementById('PersonalProjectsSection').scrollIntoView()} className='NavBarButton width100'
                        fullWidth>
                        Personal Projects
                    </Button>
                    <Button component={Link} to="/AboutMe" onClick={() => window.scrollTo(0, 0)} className='NavBarButton'
                        fullWidth>
                        About & Resume
                    </Button>
                </ButtonGroup>
                :
                <ButtonGroup variant="outlined" className='NewContentBody' fullWidth>
                    <Button component={Link} to="/" onClick={() => window.scrollTo(0, 0)} className='NavBarButton width100'
                        startIcon={<DashboardSharpIcon style={{
                            marginRight: BUTTON_ICON_MARGIN_RIGHT, paddingTop: "1vw",
                            paddingBottom: "1vw"
                        }} />}
                        fullWidth>
                        Home
                        <br />
                    </Button>
                    <Button component={Link} to="/#ProfessionalWorkSection" onClick={() => document.getElementById('ProfessionalWorkSection').scrollIntoView()} className='NavBarButton width100'
                        startIcon={<CasinoSharpIcon style={{
                            marginRight: BUTTON_ICON_MARGIN_RIGHT, paddingTop: "1vw",
                            paddingBottom: "1vw"
                        }} />} fullWidth>
                        Professional Work
                    </Button>
                    <Button component={Link} to="/#PersonalProjectsSection" onClick={() => document.getElementById('PersonalProjectsSection').scrollIntoView()} className='NavBarButton width100'
                        startIcon={<EngineeringSharpIcon style={{
                            marginRight: BUTTON_ICON_MARGIN_RIGHT, paddingTop: "1vw",
                            paddingBottom: "1vw"
                        }} />} fullWidth>
                        Personal Projects
                    </Button>
                    <Button component={Link} to="/AboutMe" onClick={() => window.scrollTo(0, 0)} className='NavBarButton'
                        startIcon={<AccountBoxSharpIcon style={{
                            marginRight: BUTTON_ICON_MARGIN_RIGHT, paddingTop: "1vw",
                            paddingBottom: "1vw"
                        }} />} fullWidth>
                        About & Resume
                    </Button>
                </ButtonGroup>}
        </div >
    );
}

export { NavBar };