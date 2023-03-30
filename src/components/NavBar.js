import { Button, ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";
import glowingEyeLogo from "../resources/images/glowingEyeAnimation/glowingEyeAnimation.gif";
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import GamesSharpIcon from '@mui/icons-material/GamesSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import LeakAddSharpIcon from '@mui/icons-material/LeakAddSharp';

function NavBar() {
    const buttonSize = "small";
    return (
        <div>
            <ButtonGroup variant="contained" className='NavBarButtonGroup' orientation='horizontal' fullWidth>
                <img src={glowingEyeLogo} alt="Glowing Eye Icon" className='CogLogo' />
                <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                    <Link to='/'>
                        <DashboardSharpIcon fontSize='inherit' /> Dashboard
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                    <Link to='/PublishedDnDContent'>
                        <CasinoSharpIcon fontSize='inherit' /> Published D&D Content
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                    <Link to='/VideoGamePrototypes'>
                        <GamesSharpIcon fontSize='inherit' /> Video Game Prototypes
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                    <Link to='/DesignExercises'>
                        <EngineeringSharpIcon fontSize='inherit' /> Design Exercises
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                    <Link to='/Resume'>
                        <ArticleSharpIcon fontSize='inherit' /> Resume
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                    <Link to='/AboutMe'>
                        <AccountBoxSharpIcon fontSize='inherit' /> About Me
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                    <Link to='/ContactMe'>
                        <LeakAddSharpIcon fontSize='inherit' /> Contact Me
                    </Link>
                </Button>
            </ButtonGroup>
        </div>
    );
}

export { NavBar };