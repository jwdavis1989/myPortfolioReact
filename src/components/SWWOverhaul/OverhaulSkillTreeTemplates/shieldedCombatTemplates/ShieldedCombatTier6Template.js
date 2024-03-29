import { Grid } from '@mui/material';
import { ShieldedCombatTier6DesignTemplate } from './ShieldedCombatTier6DesignTemplate';

function ShieldedCombatTier6Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD SLAM</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 6 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                If you have successfully blocked an enemy's attack within the last round, your Shield's attack is replaced with a powerful Shield Slam.
                <p />
                All creatures within a 10ft adjacent square must make a Dexterity Save equal to 8 + Your Proficiency + Your Strength Modifier or they take the Shield attack's full damage.
                <p />
                On a successful save, they instead take half damage.
            </div>
            <br />
            <p>
                <ShieldedCombatTier6DesignTemplate />
            </p>
        </div>
    )
}

export { ShieldedCombatTier6Template };