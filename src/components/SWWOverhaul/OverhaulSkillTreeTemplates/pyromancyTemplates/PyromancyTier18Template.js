import { Grid } from '@mui/material';
import { PyromancyTier18DesignTemplate } from './PyromancyTier18DesignTemplate';

function PyromancyTier18Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">ARMAGEDDON</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 18 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Combustion may now be used up to 3 times per long rest.
            </div>
            <br />
            <p>
                <PyromancyTier18DesignTemplate />
            </p>
        </div>
    )
}

export { PyromancyTier18Template };