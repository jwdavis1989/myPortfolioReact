import { Grid } from '@mui/material';

function LeadershipTier9Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">BISHOP'S OPENING</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">LEADERSHIP TIER 9 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Once per long rest, when you roll initiative, you may choose to give all friendly creatures that can hear you the ability to move up to their movement speed before combat begins and they gain the effects of <b>Command - Promotion.</b>

                <p />A creature cannot gain the benefits of Bishop's Opening again until they finish a Long Rest.
            </div>
        </div>
    )
}

export { LeadershipTier9Template };