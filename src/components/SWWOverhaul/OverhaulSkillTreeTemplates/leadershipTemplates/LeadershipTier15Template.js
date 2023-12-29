import { Grid } from '@mui/material';
import { LeadershipTier15DesignTemplate } from './LeadershipTier15DesignTemplate';

function LeadershipTier15Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PHALANX</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">LEADERSHIP TIER 15 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                All friendly creatures within hearing range gain +1 AC when in at least Half-Cover.
            </div>
            <LeadershipTier15DesignTemplate />
        </div>
    )
}

export { LeadershipTier15Template };