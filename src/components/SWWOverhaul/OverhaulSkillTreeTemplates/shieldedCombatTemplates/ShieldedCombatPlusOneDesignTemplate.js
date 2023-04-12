import { Grid } from '@mui/material';

function ShieldedCombatPlusOneDesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">SHIELDED COMBAT SKILL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                The goal of this skill +1 effect is to grant you proficiencies in several one-handed weapons that may be used with a shield,
                as well as provide you with growing tactical options as your shield throw becomes more flexible.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY DOES A CRITICAL FAILURE STOP YOUR SHIELD'S RETURN?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                While this may seem punishing to the player, it also does two things that are very important in game design.
                <br />It changes the scenario the player is working around, and creates a story.
                <br />This tasks the party with quickly improvising a Plan B after their initial plan had a sudden wrench thrown into it.
                Softening the blow to the unfortunate Shielded Combatant, it is unlikely the shield would land anywhere far away due to the range of the throw,
                and there exist magical items that would counter this mechanic entirely.
                <p />It has long been a problem in 5th Edition Dungeons & Dragons that movement is simply not part of the equation often enough to matter,
                and this provides a spontaneous situation where suddenly movement is the difference in having your powerful Shielded Combat defenses.
                <p />As for creating a story, one of my favorite joys as a Dungeon Master in my own games is hearing my players laugh as they recount some 
                ridiculous or perilous thing that happened during a session. Sometimes it's so memorable that it becomes a reference amongst the group for years to come.
                <br />This is also true with many of the Tier 9 Talents, as they exist largely to give the user one outstanding and memorable moment when things seem most dire.
                <p /><b>Note:</b> A critical failure is whenever you roll a 1 on a 20-sided dice. In this case, the Shielded Combatant must roll a critical failure on the attack (accuracy) roll for their shield throw.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                If you're familiar with Marvel, then we both know this shield throw is very evocative of Captain America's shield.
                Not only do shields in base 5th Edition Dungeons & Dragons lack the ability of this specific character fantasy,
                they are extremely flat in their gameplay.
                <br />This Skill Tree significantly expands their gameplay, effect, and player fantasy across the board to reimagine what a powerful defender might express.
                <br />
            </div>
        </div>
    )
}

export { ShieldedCombatPlusOneDesignTemplate };