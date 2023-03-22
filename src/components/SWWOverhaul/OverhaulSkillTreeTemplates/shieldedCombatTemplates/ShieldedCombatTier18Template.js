import { Grid } from '@material-ui/core';

function ShieldedCombatTier18Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PENDRAGON'S VIGIL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">SHIELDED COMBAT TIER 18 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <br />
            You gain an additional Reaction every round that can only be used for activating Reactive Block.

            <p />Additionally, you gain +1AC and +1 to Dexterity Saving Throws while wielding a shield.

        </div>
    )
}

export { ShieldedCombatTier18Template };