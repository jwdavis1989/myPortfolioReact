import { Grid } from '@mui/material';
import { ShieldedCombatTier15DesignTemplate } from './ShieldedCombatTier15DesignTemplate';

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
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Friendly creatures behind you are considered to have Three-Quarters Cover
                for the purpose of ranged attacks that must pass through your square to reach the friendly creature.
            </div>
            <ShieldedCombatTier15DesignTemplate />
        </div>
    )
}

export { ShieldedCombatTier15Template };