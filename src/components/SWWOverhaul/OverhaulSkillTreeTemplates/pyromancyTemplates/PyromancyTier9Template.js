import { Grid } from '@mui/material';

function PyromancyTier9Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">COMBUSTION</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">PYROMANCY TIER 9 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Once per long rest, you may spend 1 Bonus Action in order to empower your next <b className="textColorRed">Fire Damage</b> spell that targets an area. The affected spell gains the effect of your Ignition and leaves behind a Magma Surface that covers the same area as the spell.
                <p />
                The Magma Surface cannot be extinguished and lasts for <b>24 hours</b>.
                <p />
                Creatures take <b className="textColorRed">Fire Damage</b> equal to your Ignition whenever they end their turn in the Magma Surface, or for every 5ft they travel through it.
                <br /><br />
            </div>
        </div>
    )
}

export { PyromancyTier9Template };