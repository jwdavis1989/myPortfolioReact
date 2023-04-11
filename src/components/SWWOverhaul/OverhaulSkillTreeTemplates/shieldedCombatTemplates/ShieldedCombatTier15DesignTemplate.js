import { Grid } from '@mui/material';

function ShieldedCombatTier15DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD WALL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                This Talent allows the Shielded Combatant to act as mobile cover for their team, substantially 
                improving the survivability of their allies.
                <p /><b>Note:</b> Three-Quarters Cover is a mechanic where a creature's body is protected by an 
                environmental element such that only 25% of their body is visible to the attacker.
                <br />While in Three-Quarters Cover a creature gains a +5 bonus to AC and Dexterity saving throws.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                This Talent further exemplifies the player fantasy of being a powerful guardian for their allies.
                <br />It also represents improved skill in terms of reacting to incoming 
                attacks and always moving your shield to the right place in time, even when you don't use your Reactive Block.
            </div>
            <br />
        </div>
    )
}

export { ShieldedCombatTier15DesignTemplate };