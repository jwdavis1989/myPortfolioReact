import { Button, ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import GamesSharpIcon from '@mui/icons-material/GamesSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';

function NavBar() {
    const buttonSize = "1.75vh";
    return (
        <div>
            <Grid id="Row 0 Banner" container spacing={0} className="NewContentBody" fullWidth>
                <Grid className="NewContentBody">
                    <ButtonGroup variant="text" className='NavBarButtonGroup'>
                        <Button component={Link} to="/" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                            variant='fill' startIcon={<DashboardSharpIcon />} style={{ fontSize: buttonSize}}
                            fullWidth>
                            Home
                        </Button>
                        <Button component={Link} to="/SWWLevelingOverhaul" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                            style={{ fontSize: buttonSize }}
                            variant='fill' startIcon={<CasinoSharpIcon />} fullWidth>
                            Professional D&D Content
                        </Button>
                        <Button component={Link} to="/VideoGamePrototypes" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                            style={{ fontSize: buttonSize }}
                            variant='fill' startIcon={<GamesSharpIcon />} fullWidth>
                            Video Game Prototypes
                        </Button>
                        <Button component={Link} to="/DesignExercises" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                            style={{ fontSize: buttonSize }}
                            variant='fill' startIcon={<EngineeringSharpIcon />} fullWidth>
                            Design Exercises
                        </Button>
                        <Button component={Link} to="/AboutMe" onClick={() => window.scrollTo(0, 0)} color="primary" className='NavBarButton width100'
                            style={{ fontSize: buttonSize }}
                            variant='fill' startIcon={<AccountBoxSharpIcon />} fullWidth>
                            (WIP)About Me
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div >
    );
}

export { NavBar };