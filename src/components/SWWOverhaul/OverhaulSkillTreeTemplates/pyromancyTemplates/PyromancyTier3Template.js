import { Grid } from '@mui/material';

function PyromancyTier3Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">IGNITION</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">PYROMANCY TIER 3 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                You may spend 1 Bonus Action to empower your next <b className="textColorRed">Fire Damage</b> spell cast before the beginning of your next turn.
                <br />The empowered spell's initial damage deals <b>+1 Bonus</b> <b className="textColorRed">Fire Damage</b> per 3 points spent in Pyromancy to all affected creatures. Each creature may only take this damage once per Spellcast.
                <b>Note:</b> This bonus only applies to the initial damage of the spell, so spells like Searing Smite, Blazefury Weapon, or Wall of Fire do not gain this bonus on every tick of the burn or from creatures walking through the damage wall.
                <br /><br />
            </div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">RADIANT FLAMES</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                All damage spells listed in the Pyromancy Spell List gain <b className="textColorRed">Fire</b> Damage as an additional elemental type if they did not already have it.
                <br /><br />
            </div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">SEARING HEAT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Your <b className="textColorRed">Fire</b> damage spells treat creatures that are immune as being resistant.
            </div>
        </div>
    )
}

export { PyromancyTier3Template };