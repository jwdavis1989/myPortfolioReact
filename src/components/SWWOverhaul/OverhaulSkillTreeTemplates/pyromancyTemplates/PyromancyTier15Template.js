import { Grid } from '@mui/material';
import { PyromancyTier15DesignTemplate } from './PyromancyTier15DesignTemplate';

function PyromancyTier15Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">WILDFIRE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">PYROMANCY TIER 15 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                When you use your Ignition talent, you may choose to increase the size of area of effect spells by either 5ft or 10ft in all dimensions.
                <br /><br />
            </div>
            <PyromancyTier15DesignTemplate />
        </div>
    )
}

export { PyromancyTier15Template };