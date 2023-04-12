import { Grid } from '@mui/material';

function PyromancyTier9DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">COMBUSTION</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                This talent is a massive power moment for any Pyromancer. Much like many Tier 9 talents in this overhaul system,
                this is a completely game-changing effect when a player decides to use it.
                <br />Notice that this is amplified by the Fire Lord talent, and turns the raw destructive power of 
                Fire magic into a powerful zone-control tool for the next 24 hours.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY CAN'T THE MAGMA BE EXSTINGUISHED?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                This ability is meant to be game-changingly impactful, and letting a Hydromancer's Rain Spell or even 
                their Splash Cantrip extinguish such a powerful effect is both unsatisfying to the Pyromancer, and also 
                cheapens the idea of Magma and lava thematically.
                <br />Importantly, this also means working with a Hyodromancer ally is much easier, as they can't accidentally exstinguish your Magma.
                <p /><b>Note:</b> A Cantrip is a basic spell, also known as a level 0 spell, that can be 
                used every turn without expending spell slots.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Creating such a devastating effect in potentially a very large area caters to the raw destructive theming of Fire magic.
                <br />Fireball hurts a lot in D&D, but do you know what hurts even more? 
                <br />A Fireball that leaves a large area too dangerous to traverse for fear or burning to death for the next 24 hours.
            </div>
            <br />
        </div>
    )
}

export { PyromancyTier9DesignTemplate };