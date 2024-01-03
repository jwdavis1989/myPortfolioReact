import { Grid } from '@mui/material';
import { PyromancyTier6DesignTemplate } from './PyromancyTier6DesignTemplate';

function PyromancyTier6Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">FIRE LORD</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 6 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                When you use your Ignition talent, you may choose to increase the size of area of effect
                spells by 5ft in all dimensions.
            </div>
            <br />
            <p>
                <PyromancyTier6DesignTemplate />
            </p>
        </div>
    )
}

export { PyromancyTier6Template };