import { Grid } from '@mui/material';
import { PyromancyTier3DesignTemplate } from './PyromancyTier3DesignTemplate';

function PyromancyTier3Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PYROMANCY SKILL</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 3 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">IGNITION</b>
            <div className="animationFadeIn">
                You may spend 1 Bonus Action to empower your next <b className="textColorRed">Fire Damage</b> spell cast before the beginning of your next turn.
                <br />
                The empowered spell's initial damage deals <b>+1 Bonus</b> <b className="textColorRed">Fire Damage</b> per 3 points spent in Pyromancy to all affected creatures. Each creature may only take this damage once per Spellcast.
                <p>
                    <b>Note:</b> This bonus only applies to the initial damage of the spell, so spells like Searing Smite, Blazefury Weapon, or Wall of Fire do not gain this bonus on every tick of the burn or from creatures walking through the damage wall.
                </p>
            </div>
            <p>
                <b className="AbilityHeaderSmall">RADIANT FLAMES</b>
                <div className="animationFadeIn">
                    All damage spells listed in the Pyromancy Spell List gain <b className="textColorRed">Fire</b> Damage as an additional elemental type if they did not already have it.
                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">SEARING HEAT</b>
                <div className="animationFadeIn">
                    Your <b className="textColorRed">Fire</b> damage spells treat creatures that are immune as being resistant.
                </div>
            </p>
            <br />
            <p>
                <PyromancyTier3DesignTemplate />
            </p>
        </div>
    )
}

export { PyromancyTier3Template };