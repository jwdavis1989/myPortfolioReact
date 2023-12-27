import PhoenixBombIcon from '../../resources/images/gamePrototypes/gifs/phoenixBomb.gif';
import { Grid } from '@mui/material';

function PhoenixBombTemplate() {
    return (
        <div>
                Screen-clearing bombs are a common sight in many shmups, however Phoenix Missiles are much more fun.
                <br />Instead of a simple click followed by a boom killing all enemies, Phoenix Missiles freeze time
                and allow the player to draw their own guided missile route.
                This allows the player to strategize and express skillful planning for a more satisfying screen clearing 
                ability.
                <p>
                    (<b>Tip:</b> Corvette enemies have a 100% drop chance for Phoenix Missiles. Use this to your advantage in the boss fight!)
                </p>
                <Grid container>
                    <Grid item xs={1}>
                        <img className='' width="100%" alt="Phoenix Bomb Sprite" src={PhoenixBombIcon} />
                    </Grid>
                    <Grid item xs={11}>
                        <p /><b className='textColorBlue'>How To Use:</b>
                        <ol>
                            <li>
                                Enemies sometimes drop glowing red bombs with a P on them when they die.
                            </li>
                            <li>
                                Pick up the glowing red bombs to gain a Phoenix Missile.
                            </li>
                            <li>
                                Right click to freeze time.
                            </li>
                            <li>
                                Left click to set each waypoint you want the missile to fly through.
                            </li>
                            <li>
                                After picking the final waypoint, the Phoenix Missile launches and destroys enemies within its path!
                            </li>
                        </ol>
                    </Grid>

                </Grid>
        </div>
    )
}

export { PhoenixBombTemplate };