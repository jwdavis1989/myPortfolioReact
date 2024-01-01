import { Grid } from '@mui/material';
import { PyromancyTier12DesignTemplate } from './PyromancyTier12DesignTemplate';

function PyromancyTier12Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">GREATER SEARING HEAT</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">PYROMANCY TIER 12 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Your <b className="textColorRed">Fire</b> damage spells treat creatures that are immune to fire damage as if they have resistance.
                <p />
                Your <b className="textColorRed">Fire</b> damage spells treat creatures that are resistant to fire damage as if they have no resistance, including the -3 Fire damage effect granted by the Soaked - Status.
                <br /><br />
            </div>
            <PyromancyTier12DesignTemplate />
        </div>
    )
}

export { PyromancyTier12Template };