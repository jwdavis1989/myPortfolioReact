import { Grid } from '@mui/material';
import { PyromancyTier12DesignTemplate } from './PyromancyTier12DesignTemplate';

function PyromancyTier12Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">GREATER SEARING HEAT</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 12 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Your <b className="textColorRed">Fire</b> damage spells treat creatures that are immune to fire damage as if they have resistance.
                <p />
                Your <b className="textColorRed">Fire</b> damage spells treat creatures that are resistant to fire damage as if they have no resistance, including the -3 Fire damage effect granted by the Soaked - Status.
            </div>
            <br />
            <p>
                <PyromancyTier12DesignTemplate />
            </p>
        </div>
    )
}

export { PyromancyTier12Template };