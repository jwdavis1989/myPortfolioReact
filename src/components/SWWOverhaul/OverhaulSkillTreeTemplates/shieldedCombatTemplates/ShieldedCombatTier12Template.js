import { Grid } from '@material-ui/core';

function ShieldedCombatTier12Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">STAGGERING SLAM</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">SHIELDED COMBAT TIER 12 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <br />
            Your Shield Slam ability now forces creatures that fail the Dexterity Saving Throw to roll the resulting Constitution Saving Throw to maintain their concentration with disadvantage.

            <p/>Additionally, creatures that fail the save gain Disadvantage on their next attack roll.

        </div>
    )
}

export { ShieldedCombatTier12Template };