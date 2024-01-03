import { Grid } from '@mui/material';
import { ShieldedCombatTier12DesignTemplate } from './ShieldedCombatTier12DesignTemplate';

function ShieldedCombatTier12Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">STAGGERING SLAM</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 12 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Your Shield Slam ability now forces creatures that fail the Dexterity Saving Throw to roll the resulting Constitution
                Saving Throw to maintain their concentration with disadvantage.
                <p />
                Additionally, creatures that fail the Dexterity Save gain Disadvantage on their next attack roll.
            </div>
            <br />
            <p>
                <ShieldedCombatTier12DesignTemplate />
            </p>
        </div>
    )
}

export { ShieldedCombatTier12Template };