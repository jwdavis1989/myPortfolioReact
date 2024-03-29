import { Grid } from '@mui/material';
import { LeadershipTier9DesignTemplate } from './LeadershipTier9DesignTemplate';

function LeadershipTier9Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">BISHOP'S OPENING</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 9 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Once per long rest, when you roll initiative, you may choose to give all friendly creatures that can hear you the ability to move up to their movement speed before combat begins and they gain the effects of <b>Command - Promotion.</b>

                <br />
                A creature cannot gain the benefits of Bishop's Opening again until they finish a Long Rest.
            </div>
            <br />
            <p>
                <LeadershipTier9DesignTemplate />
            </p>
        </div>
    )
}

export { LeadershipTier9Template };