import { Grid } from '@material-ui/core';

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
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <br />
            All friendly creatures within hearing range gain +1 AC when in at least Half-Cover.
        </div>
    )
}

export { LeadershipTier15Template };