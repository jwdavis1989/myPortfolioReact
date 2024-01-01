import { Grid } from '@mui/material';
import { LeadershipTier15DesignTemplate } from './LeadershipTier15DesignTemplate';

function LeadershipTier15Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PHALANX</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <span>LEADERSHIP TIER 15 TALENT&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                All friendly creatures within hearing range gain a +1 bonus to Armor Class and Dexterity Saving Throws when in at least Half-Cover.
            </div>
            <br />
            <p>
                <LeadershipTier15DesignTemplate />
            </p>
        </div>
    )
}

export { LeadershipTier15Template };