import { Grid } from '@mui/material';

function ShieldedCombatTier12DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">STAGGERING SLAM</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                Staggering Slam further empowers your shield attacks to knock enemies senseless. This is especially potent after 
                successfully blocking as your shield slam hits a 10ft by 10ft area.
                <p /><b>Note:</b> Concentration is a mechanic in 5th Edition Dungeons & Dragons 
                where magic-users must maintain concentration on some types of spells to continue to benefit from their effect.
                These spells offer humongous power bonuses but are susceptible to losing concentration. 
                If a caster loses concentration on their spell, the spell ends.
                <br />Everytime a creature takes damage, they roll a Constitution Saving Throw to maintain concentration. 
                The total they must roll is either 10 or half of the damage dealt, whichever is higher.
                <p /><b>Note:</b> Disadvantage is a mechanic where a creature performs a 20-sided dice roll, 
                they instead roll a pair of 20-sided dice and use the lower number rolled. Essentially, the creature will 
                struggle significantly more to perform whatever task they attempt with disadvantage.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY DOES IT GIVE DISADVANTAGE ON ENEMY ATTACK ROLLS TOO?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                This allows the shield slams to be meaningful against both casters and martial combatants, improving flexibility.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                You've become a seasoned defender, honing your shield arm so that the shield becomes an extension of your body.
                <br />You strike with such force that Goblins and Wizards alike jolt to alertness at the reverberating sound of 
                your shield throw or slam in the distance.
                <br />This is a powerful fantasy to not only tanks in general, but anti-mages as well.
            </div>
            <br />
        </div>
    )
}

export { ShieldedCombatTier12DesignTemplate };