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
    const buttonSize = "1.75vh";
    return (
        <div>
            <ButtonGroup variant="contained" className='NavBarButtonGroup' orientation='horizontal' fullWidth>
                <img src={glowingEyeLogo} alt="Glowing Eye Icon" className='CogLogo' />
                <Link to='/'>
                    <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                        <DashboardSharpIcon fontSize='inherit' /> Dashboard
                    </Button>
                </Link>
                <Link to='/PublishedDnDContent'>
                    <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                        <CasinoSharpIcon fontSize='inherit' /> Published D&D Content
                    </Button>
                </Link>
                <Link to='/VideoGamePrototypes'>
                    <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                        <GamesSharpIcon fontSize='inherit' /> Video Game Prototypes
                    </Button>
                </Link>
                <Link to='/DesignExercises'>
                    <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                        <EngineeringSharpIcon fontSize='inherit' /> Design Exercises
                    </Button>
                </Link>
                <Link to='/Resume'>
                    <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                        <ArticleSharpIcon fontSize='inherit' /> Resume
                    </Button>
                </Link>
                <Link to='/AboutMe'>
                    <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                        <AccountBoxSharpIcon fontSize='inherit' /> About Me
                    </Button>
                </Link>
                <Link to='/ContactMe'>
                    <Button color="primary" className='NavBarButton' style={{ fontSize: buttonSize }}>
                        <LeakAddSharpIcon fontSize='inherit' /> Contact Me
                    </Button>
                </Link>
            </ButtonGroup>
        </div>
    );
}

export { NavBar };