import { Grid } from '@mui/material';

function ShieldedCombatTier6Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD SLAM</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">SHIELDED COMBAT TIER 6 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <br />
            If you have successfully blocked an enemy's attack within the last round, your Shield's attack is replaced with a powerful Shield Slam.

            <p />All creatures within a 10ft adjacent square must make a Dexterity Save equal to 8 + Your Proficiency + Your Strength Modifier or they take the Shield attack's full damage.

            <p />On a successful save, they instead take half damage.
        </div>
    )
}

export { ShieldedCombatTier6Template };