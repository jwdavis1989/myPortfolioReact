import { Grid } from '@mui/material';

function ShieldedCombatTier18DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PENDRAGON'S VIGIL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                While simple, this Talent provides a dramatic increase in the player's 
                battlefield presence as they can now use their block twice every round.
                <br />Additionally, they could choose to use their Reaction on a different 
                Reaction (such as an Attack of Opportunity) and still be able to use Reactive Block every turn.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Uther Pendragon, also known as King Uther, was a legendary King of the 
                Britons in sub-Roman Britain (c. 6th century). 
                <br />Uther was also the father of King Arthur, and thus does this Talent derive its name from.
                <p />Furthermore, Pendragon literally means "head dragon" in its original 
                Brittonic, though it was used figuratively to mean "highest commander; head leader; top of the command chain.
            </div>
            <br />
        </div>
    )
}

export { ShieldedCombatTier18DesignTemplate };