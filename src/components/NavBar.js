import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from "react-router-dom";
import spinningLogo2 from "../resources/images/spinningCogAnimation/spinningCogAnimation.gif";

function NavBar() {
    return (
        <div>
            <ButtonGroup variant="contained" className='NavBarButtonGroup' orientation='horizontal'>
                {/*Header Image*/}
                {<img src={spinningLogo2} alt="Spinning Cogwheel" className='CogLogo' />}
               
                <Button color="primary" className='NavBarButton'>
                    <Link  to='/'>
                        Dashboard
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton'>
                    <Link  to='/PublishedDnDContent'>
                        Published D&D Content
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton'>
                    <Link  to='/VideoGamePrototypes'>
                        Video Game Prototypes
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton'>
                    <Link  to='/DesignExercises'>
                        Design Exercises
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton'>
                    <Link  to='/Resume'>
                        Resume
                    </Link>
                </Button>
                <Button color="primary" className='NavBarButton'>
                    <Link  to='/AboutMe'>
                        About Me
                    </Link>
                </Button>
                <div className='HeaderTitleRight'>
                    JERRY DAVIS
                </div>
            </ButtonGroup>
        </div>
    );
}

export { NavBar };