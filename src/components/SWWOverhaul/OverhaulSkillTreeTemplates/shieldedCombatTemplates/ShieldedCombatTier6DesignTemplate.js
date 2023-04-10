import { Grid } from '@mui/material';

function ShieldedCombatTier6DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD SLAM</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                Shield Slam grants the player a potent way to counter-attack the enemies after they block.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY GIVE SHIELDED COMBATANTS AN AREA DAMAGE OPTION?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                While it may seem counter-intuitive to some, ensuring that the "Tank" 
                is a threat to the creatures around it helps ensure their relevancy in combat. 
                <p />Additionally this special attack also deals at least half damage to all 
                creatures in the area when they succeed on the Dexterity Saving Throw which improves 
                the Shielded Combatant's reliability even further.
                <p />This also interacts with later talents to devastating effect against enemy casters.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Shield Slamming with such power that the sheer force of the blow extends 
                outward to up to 4 creatures at once is a powerful fantasy for the player, 
                especially when it comes off the back of successfully blocking a powerful boss' attack masterfully!
            </div>
            <br />
        </div>
    )
}

export { ShieldedCombatTier6DesignTemplate };