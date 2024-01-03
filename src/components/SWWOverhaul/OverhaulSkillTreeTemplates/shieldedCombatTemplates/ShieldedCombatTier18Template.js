import { Grid } from '@mui/material';
import { ShieldedCombatTier18DesignTemplate } from './ShieldedCombatTier18DesignTemplate';

function ShieldedCombatTier18Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PENDRAGON'S VIGIL</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 18 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                You gain an additional Reaction every round that can only be used for activating Reactive Block.
                <p />
                Additionally, you gain +1AC and +1 to Dexterity Saving Throws while wielding a shield.
            </div>
            <br />
            <p>
                <ShieldedCombatTier18DesignTemplate />
            </p>
        </div>
    )
}

export { ShieldedCombatTier18Template };