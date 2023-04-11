import { Grid } from '@mui/material';

function ShieldedCombatTier9DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">UNBREAKABLE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                As with many Tier 9 Talents, Unbreakable carves out a shining moment that is both powerful and unforgettable for the player.
                <br />
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY DOES IT WORK ON SPELLS & ATTACKS THAT PASS NEAR YOU?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                This gives the ability both an extremely cool thematic element, and a powerful boost to its effectiveness to insure 
                it is memorable.
                <br />Notice that spells passing near you include spells & attacks aimed at people behind you if a line drawn from the Attacker 
                passes within 5ft of you on its way to your ally, allowing you to deflect them masterfully, resulting in 0 
                effect and damage for both you and the protected ally standing behind you.
                <p />Imagine a stalwart defender casually swatting away or blocking every single Bolt of Lightning thrown by several 
                Aeromancers. Wouldn't that make you feel like the impenetrable anchor of your team, a beacon that provides substantial 
                protection to anyone who stands behind you?
            </div>
            <br />
        </div>
    )
}

export { ShieldedCombatTier9DesignTemplate };