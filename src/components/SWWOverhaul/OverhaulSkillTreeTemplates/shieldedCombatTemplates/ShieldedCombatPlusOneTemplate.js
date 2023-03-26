import { Grid } from '@mui/material';

function ShieldedCombatPlusOneTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELDED COMBAT SKILL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">SHIELDED COMBAT +1 EFFECT</span><br /><br />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">TREE COMPLEXITY</b>
                </Grid>
            </Grid>
            <br />
            Moderate-to-High
            <br /><br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <br />
            You may now choose to use your Shield as a weapon that deals 1d4 + Strength modifier damage when performing the attack action and you are proficient with it.

            <p/>You may also throw the shield at a target at up to a range of 5ft + <b>5ft per 2</b> points spent in Shielded Combat.
            The shield will automatically return to you after your throw unless your attack is a critical failure.
            <br /><br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">PROFICIENCY</b>
                </Grid>
            </Grid>
            <br />
            You gain proficiency with Shields, Flails, Cat o' Nine Tails, Morningstars, and Warpicks.
        </div>
    )
}

export { ShieldedCombatPlusOneTemplate };