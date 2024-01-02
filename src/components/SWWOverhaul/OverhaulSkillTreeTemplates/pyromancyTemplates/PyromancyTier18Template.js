import { Grid } from '@mui/material';
import { PyromancyTier18DesignTemplate } from './PyromancyTier18DesignTemplate';

function PyromancyTier18Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">ARMAGEDDON</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">TIER 18 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Combustion may now be used up to 3 times per long rest. 
                <br /><br />
            </div>
            <PyromancyTier18DesignTemplate />
        </div>
    )
}

export { PyromancyTier18Template };