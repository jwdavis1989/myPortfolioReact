import { Grid } from '@mui/material';
import { ShieldedCombatPlusOneDesignTemplate } from './ShieldedCombatPlusOneDesignTemplate';

function ShieldedCombatPlusOneTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD MASTERY SKILL</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>SHIELD MASTERY +1 EFFECT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">TREE COMPLEXITY</b>
            <div className="animationFadeIn">
                Moderate-to-High
            </div>
            <p>
                <b className="AbilityHeaderSmall">EFFECT</b>
                <div className="animationFadeIn">
                    You may now choose to use your Shield as a weapon that deals 1d4 + Strength modifier damage when performing the attack action and you are proficient with it.

                    <p />
                    You may also throw the shield at a target at up to a range of 5ft + <b>5ft per 2</b> points spent in Shield Mastery.
                    The shield will automatically return to you after your throw unless your attack is a critical failure.
                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">PROFICIENCY</b>
                <div className="animationFadeIn">
                    You gain proficiency with Shields, Flails, Cat o' Nine Tails, Morningstars, and Warpicks.
                </div>
            </p>
            <br />
            <p>
                <ShieldedCombatPlusOneDesignTemplate />
            </p>
        </div>
    )
}

export { ShieldedCombatPlusOneTemplate };