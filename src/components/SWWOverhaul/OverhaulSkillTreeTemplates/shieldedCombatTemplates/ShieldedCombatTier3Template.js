import { Grid } from '@mui/material';
import { ShieldedCombatTier3DesignTemplate } from './ShieldedCombatTier3DesignTemplate';

function ShieldedCombatTier3Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD TRAINING</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 3 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">REACTIVE BLOCK</b>
            <div className="animationFadeIn">
                While wielding a shield, whenever a visible creature makes an attack roll or uses a spell effect that requires a dexterity saving throw, against you or a creature within 5ft of you, you may spend a Reaction to attempt to block the effect.
                <p />
                The target being blocked gains a bonus to their AC or Dexterity Save equal to 3 + <b>1 Bonus AC/Dexterity Save</b> per 3 points spent in Shield Mastery against the creature's attack or ability.
                <p />
                If this bonus is enough for the attack or ability to fail, you block the rolled attack or effect from hitting the blocked creature.
                <p />
                <b>Note:</b>
                <br />
                You may only attempt to block for one creature at a time with this ability.
            </div>
            <p>
                <b className="AbilityHeaderSmall">STALWART</b>
                <div className="animationFadeIn">
                    Your Shield AC Bonus now also applies to your Dexterity Saving Throws.
                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">WEAPON & SHIELD TRAINING</b>
                <div className="animationFadeIn">
                    The Cat o' Nine Tails gain the Reach tag and the damage of Whips increases to 1d8.
                    <p />
                    Additionally, while wielding a Shield, you may now attack with both your weapon and shield as part of the attack action.
                    You may choose to bash with the shield or throw it while performing this attack.
                    <p />
                    The damage of the shield is equal to 1d4 + Strength and you are proficient in using it.
                </div>
            </p>
            <br />
            <p>
                <ShieldedCombatTier3DesignTemplate />
            </p>
        </div>
    )
}

export { ShieldedCombatTier3Template };