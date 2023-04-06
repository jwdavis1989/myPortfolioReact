import { Grid } from '@mui/material';

function ShieldedCombatTier3Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD TRAINING</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">SHIELDED COMBAT TIER 3 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">REACTIVE BLOCK</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                While wielding a shield, whenever a visible creature makes an attack roll or uses a spell effect that requires a dexterity saving throw, against you or a creature within 5ft of you, you may spend a Reaction to attempt to block the effect.

                <p />The target being blocked gains a bonus to their AC or Dexterity Save equal to 3 + <b>1 Bonus AC/Dexterity Save</b> per 3 points spent in Shielded Combat against the creature's attack or ability.

                <p />If this bonus is enough for the attack or ability to fail, you block the rolled attack or effect from hitting the blocked creature.
                <p /><b>Note:</b>
                <br />You may only attempt to block for one creature at a time with this ability.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">STALWART</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Your Shield AC Bonus now also applies to your Dexterity Saving Throws.
            </div>
                <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WEAPON & SHIELD TRAINING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />The Cat o' Nine Tails gain the Reach tag and the damage of Whips increases to 1d8.

                <p />Additionally, while wielding a Shield, you may now attack with both your weapon and shield as part of the attack action.
                You may choose to bash with the shield or throw it up to 20ft while performing this attack.

                <p />The damage of the shield is equal to 1d4 + Strength and you are proficient in using it.
            </div>
        </div>
    )
}

export { ShieldedCombatTier3Template };