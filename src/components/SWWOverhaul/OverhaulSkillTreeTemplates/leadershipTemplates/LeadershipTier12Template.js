import { Grid } from '@mui/material';
import { LeadershipTier12DesignTemplate } from './LeadershipTier12DesignTemplate';

function LeadershipTier12Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">VETERAN EXPERTISE</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <span>LEADERSHIP TIER 12 TALENT&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Through countless battles, you've refined your tactical commands, granting each a bonus listed below.
            </div>
            <p>

                <b className="AbilityHeaderSmall">COMMAND UPGRADES LIST</b>
                <div className="animationFadeIn">
                    <ul>
                        <li>
                            <b>Command - En Passant:</b>
                            <br />
                            Now grants all affected creatures up to 10ft of movement instead of 5ft.
                        </li>
                        <li>
                            <b>Command - Knight Takes Pawn:</b>
                            <br />
                            Your ally's weapon attack deals bonus damage equal to your Charisma Modifier.
                        </li>
                        <li>
                            <b>Command - Promotion:</b>
                            <br />
                            Your ally's next attack now deals bonus damage equal to your Charisma Modifier.
                        </li>
                        <li>
                            <b>Command - Unpin Pawn:</b>
                            <br />
                            Now grants the affected creature advantage on the Saving Throw.
                        </li>
                    </ul>
                </div>
            </p>
            <br />
            <p>
                <LeadershipTier12DesignTemplate />
            </p>
        </div>
    )
}

export { LeadershipTier12Template };