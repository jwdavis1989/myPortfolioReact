import { Grid } from '@mui/material';

function ShieldedCombatTier9Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">UNBREAKABLE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">SHIELDED COMBAT TIER 9 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <br />
            Once per long rest, you may spend 1 Bonus Action to raise your shield with might and conviction to protect others.

            <p />Until the beginning of your next turn, you automatically deflect and disarm all spells and attacks that pass within 5ft of you, even if you are not their target.

            <p />Spells and attacks deflected by this talent become harmless and apply no effect.
        </div>
    )
}

export { ShieldedCombatTier9Template };