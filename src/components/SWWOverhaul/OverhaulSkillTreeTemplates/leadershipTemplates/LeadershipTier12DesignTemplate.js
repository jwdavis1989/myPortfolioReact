import { Grid } from '@mui/material';

function LeadershipTier12DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">VETERAN EXPERTISE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                Your tactical commands have all been empowered to do more in the same amount of time.
                <br />This also allows Charisma to be a damage-dealing attribute for your character when used with
                Knight Takes Pawn or Promotion, in addition to its other myriad of benefits.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                This Talent represents your seasoned experience when dealing with combat sorties. 
                <br />You've become quite the commander by this point and it shows by the way you command your team.
            </div>
            <br />
        </div>
    )
}

export { LeadershipTier12DesignTemplate };