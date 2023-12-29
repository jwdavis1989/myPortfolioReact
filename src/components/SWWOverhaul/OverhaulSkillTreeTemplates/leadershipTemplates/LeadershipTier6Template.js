import { Grid } from '@mui/material';
import { LeadershipTier6DesignTemplate } from './LeadershipTier6DesignTemplate';

function LeadershipTier6Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">ON THE MOVE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">LEADERSHIP TIER 6 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                At the beginning of your turn, you may grant one allied creature within hearing range the ability to immediately move up to 15ft, however if you do so, you cannot move until the beginning of your next turn.

                <p />This movement may provoke Attacks of Opportunity.
            </div>
            <LeadershipTier6DesignTemplate />
        </div>
    )
}

export { LeadershipTier6Template };