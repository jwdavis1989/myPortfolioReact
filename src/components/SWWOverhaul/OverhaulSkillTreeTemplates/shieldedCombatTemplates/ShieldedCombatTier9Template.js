import { Grid } from '@mui/material';
import { ShieldedCombatTier9DesignTemplate } from './ShieldedCombatTier9DesignTemplate';

function ShieldedCombatTier9Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">UNBREAKABLE</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 9 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Once per long rest, you may spend 1 Bonus Action to raise your shield with might and conviction to protect others.
                <p />
                Until the beginning of your next turn, you automatically deflect and disarm all spells and attacks that pass within 5ft of you, even if you are not their target.
                <p />
                Spells and attacks deflected by this talent become harmless and apply no effect.
            </div>
            <br />
            <p>
                <ShieldedCombatTier9DesignTemplate />
            </p>
        </div>
    )
}

export { ShieldedCombatTier9Template };