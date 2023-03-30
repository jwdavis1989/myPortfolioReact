import { Grid } from '@mui/material';

function ShieldedCombatTier15Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD WALL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">SHIELDED COMBAT TIER 15 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Friendly creatures behind you are considered to have Three-Quarters Cover
                for the purpose of ranged attacks that must pass through your square to reach the friendly creature.
            </div>
        </div>
    )
}

export { ShieldedCombatTier15Template };