import { Grid } from '@mui/material';

function LeadershipTier6DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">ON THE MOVE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                This talent lays the foundation of your general gameplay loop as a Leader.
                <br />Every turn, you have 4 different commands you can issue your team to change the flow of battle to your favor 
                and finding the right command for the situation is an expression of mastery for the player.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY THE LIMITATIONS?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                This was done as a means of creating tactical choice. On your turn you could move, 
                or you could let an ally who absolutely needs to move shift their position. 
                It isn't always the right move to use On The Move and that's the point. 
                The player expresses mastery by choosing the right tool for the right job in their vast toolset.
                <p />If an ally needs to get out of opportunity attack range, remember that you could instead issue a Command - En Passant.
                <br /> You could also combine En Passant with On The Move to create a powerful burst of movement 
                speed for a teamate to help them get into position or escape a pursuer!
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                On The Move is a reference to the military jargon, <b>O</b>scar <b>M</b>ike which is <b>OM</b> in the NATO Alphabet, short for "<b>O</b>n the <b>M</b>ove".
            </div>
            <br />
        </div>
    )
}

export { LeadershipTier6DesignTemplate };