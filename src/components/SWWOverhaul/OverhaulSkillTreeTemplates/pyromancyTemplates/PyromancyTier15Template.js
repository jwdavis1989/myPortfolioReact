import { Grid } from '@mui/material';
import { PyromancyTier15DesignTemplate } from './PyromancyTier15DesignTemplate';

function PyromancyTier15Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">WILDFIRE</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 15 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                When you use your Ignition talent, you may choose to increase the
                size of area of effect spells by either 5ft or 10ft in all dimensions.
            </div>
            <br />
            <p>
                <PyromancyTier15DesignTemplate />
            </p>
        </div>
    )
}

export { PyromancyTier15Template };