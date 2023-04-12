import { Grid } from '@mui/material';

function ShieldedCombatTier3DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELD TRAINING</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                As with many Tier 3 talents, Shield Training establishes the primary gameplay loop for the tree. 
                In summary, this talent buffs the damage and/or reach of several one-handed weapons you may wield with 
                a shield, it allows you to shield slam with your full accuracy and damage (which is not in the base game), 
                and it freshens up the passive gameplay of shields through a powerful reaction, Reactive Block.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">HOW DOES REACTIVE BLOCK IMPROVE THE GAMEPLAY LOOP?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                In base 5th Edition Dungeons & Dragons, shields are essentially passive "stat-sticks" that grant +1 or +2 to your Armor Class. 
                They're incredibly uninteractive, and so to improve player tactical decision making, Shielded Combatants learn the 
                Reactive Block reaction. 
                <p />Now whenever a creature attacks the player, that player can choose to gain a significant boost to their Armor 
                Class against the triggering attack only. Will the player try to block the first thing that comes their way, 
                or will they wait for the strongest enemy to strike?
                <br />
                <br /><b>Note:</b> Reactions are actions you may take on other creature's turns. 
                <br />You get one per round generally.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY CAN YOU USE REACTIVE BLOCK ON OTHERS?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                The base game has very little in the way of the concept of "Tanking." 
                Yes, you can be hard to kill, but it is hard to force intelligent enemies to attack you.
                <p />Because of this, Reactive Block is able to be used on yourself or a friendly ally within melee range.
                <br />This not only allows you to protect your team, but it also makes you <i>feel</i> like the stalwart defender of your team.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY INCREASE DEXTERITY SAVES?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Dexterity saving throws are often performed when a creature casts a spell that affects an area. 
                <br />Stalwart grants your shield bonus to your Dexterity Saves, and Reactive 
                Block buffs both Armor Class and your Dexterity Saving Throws. Both effects give you significantly 
                more survivability against powerful area of effect spells like the notorious Fireball spell.
                <br />Additionally, while many Dexterity-Save-based spells deal half damage if you succeed on the roll, 
                Reactive Block completely negates all effects of the blocked attack or spell, meaning you take 0 damage.
                <p />It is also very cool thematically, that you are so capable with a shield that you can even 
                block magic for yourself or an ally.
            </div>
            <br />
        </div>
    )
}

export { ShieldedCombatTier3DesignTemplate };