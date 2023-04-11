import { Grid } from '@mui/material';

function PyromancyTier18DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">ARMAGEDDON</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                This talent allows a Pyromancer to completely reshape the surface of the immediate 
                area into a fiery hell, or ration out their destructive mayhem over three separate encounters.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">DO OVERLAPPING MAGMA SURFACES STACK?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                No, only the first instance of lava in a 5ft square applies.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Hey kids, have you ever wanted to burn an entire city down?
                <br />Well now you can!
                <p />It can not be overstated how biblically terrifying this ability 
                can be, especially now as the Pyromancer has conquered the Wildfire and Greater Searing Heat Talents.
                <p /><i>You really have become the walking Inferno itself.</i>
            </div>
            <br />
        </div>
    )
}

export { PyromancyTier18DesignTemplate };