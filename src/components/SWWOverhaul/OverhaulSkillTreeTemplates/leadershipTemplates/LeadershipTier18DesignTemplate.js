import { Grid } from '@mui/material';

function LeadershipTier18DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">CHECKMATE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                While simple, this Talent provides a dramatic increase in the player's battlefield presence.
                <br />It also increases the player's flexibility as they can potentially use their Bonus Action for a 
                different option such as casting a spell.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY CAN'T YOU USE THE SAME COMMAND TWICE?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Commands are extremely powerful, and stacking them would be significantly out of the power scope for the system.
                <br />This also encourages the player to use a variety of Commands, improving their decision making opportunities.
                <p />This is an example of designing so that players do not optimize their own fun out of the game.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                In Chess, a Checkmate is when one player's King is threatened by the opposing players' 
                pieces in such a way that the King can not avoid death. This is the victory condition in Chess.
                <br />This level of moving your allies around like Chess pieces is a strong power fantasy for the player.
            </div>
            <br />
        </div>
    )
}

export { LeadershipTier18DesignTemplate };