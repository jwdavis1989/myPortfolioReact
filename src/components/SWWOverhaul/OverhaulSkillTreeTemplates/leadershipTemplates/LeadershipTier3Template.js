import { Grid } from '@mui/material';
import { LeadershipTier3DesignTemplate } from './LeadershipTier3DesignTemplate';

function LeadershipTier3Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">BATTLEFIELD TACTICIAN</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <span>LEADERSHIP TIER 3 TALENT&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                You gain several Tactical Commands you may issue to friendly creatures that can hear you.
                The different Tactical Commands are listed below.
                <p>
                    <b>Note:</b>
                    <br />
                    A creature can only benefit from Tactical Commands once per round.
                </p>
            </div>
            <p>
                <b className="AbilityHeaderSmall">COMMANDS LIST</b>
                <div className="animationFadeIn">
                    <ul>
                        <li>
                            <b>Command - En Passant:</b>
                            <br />
                            You may spend 1 Bonus Action on your turn to grant a number of allies equal to your Charisma Modifier the ability to immediately move up to 5ft as long as they are within 60ft.
                            This movement does not provoke Attacks of Opportunity.
                        </li>
                        <li>
                            <b>Command - Knight Takes Pawn:</b>
                            <br />
                            You may spend 1 Bonus Action to coordinate an attack with an ally against a target creature.
                            Your first Attack before the end of your turn allows an ally within melee range of the same creature to make one weapon attack against them.
                            Your ally's attack does not benefit from their talents.
                            See the example below for more information.
                        </li>
                        <li>
                            <b>Command - Promotion:</b>
                            <br />
                            You may spend 1 Bonus Action on your turn to grant one creature advantage on their next attack roll.
                        </li>
                        <li>
                            <b>Command - Unpin Pawn:</b>
                            <br />
                            You may spend 1 Bonus Action on your turn to allow one creature within 60ft to perform a Saving Throw with a bonus equal to your Charisma Modifier if they are currently under the effects of any effect that requires a saving throw to end.
                            <br />
                            <b>Optional Rule:</b>
                            <br />
                            The player must vocally perform the inspiring phrase for it to function properly.
                        </li>
                    </ul>
                </div>
            </p>
            <br />
            <p>
                <LeadershipTier3DesignTemplate />
            </p>
        </div>
    )
}

export { LeadershipTier3Template };