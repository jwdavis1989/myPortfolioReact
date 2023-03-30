import { Grid } from '@mui/material';

function PyromancyTier6Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">FIRE LORD</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">PYROMANCY TIER 6 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                When you use your Ignition talent, you may choose to increase the size of area of effect 
                spells by 5ft in all dimensions.
                <br /><br />
            </div>
        </div>
    )
}

export { PyromancyTier6Template };