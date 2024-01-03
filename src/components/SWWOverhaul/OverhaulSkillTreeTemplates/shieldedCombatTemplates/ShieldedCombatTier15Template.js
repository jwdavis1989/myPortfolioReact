import { Grid } from '@mui/material';
import { ShieldedCombatTier15DesignTemplate } from './ShieldedCombatTier15DesignTemplate';

function ShieldedCombatTier15Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD WALL</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 15 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Friendly creatures behind you are considered to have Three-Quarters Cover
                for the purpose of ranged attacks that must pass through your square to reach the friendly creature.
            </div>
            <br />
            <p>
                <ShieldedCombatTier15DesignTemplate />
            </p>
        </div>
    )
}

export { ShieldedCombatTier15Template };