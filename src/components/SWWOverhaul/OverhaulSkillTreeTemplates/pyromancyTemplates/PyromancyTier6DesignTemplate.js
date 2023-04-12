import { Grid } from '@mui/material';

function PyromancyTier6DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">FIRE LORD</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                This Talent grants the Pyromancer the ability to significantly improve their damage potential at the cost of a Bonus Action. 
                Think of it as overcharging a fire spell.
                <br />Notice that this works with spells that target an Area of Effect, and it becomes clear in its significance as a 
                tool to boost a player's damage output with fire magic.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHAT DOES "IN ALL DIMENSIONS" MEAN IN REGARD TO A SPELL?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Many spells deal damage in a listed area of effect. This Talent increases those areas of effect in all dimensions.
                <br /><b>Note:</b> An average-sized creature occupies a space of 5 foot by 5 foot by 5 foot.
                <p /><b>Example 1:</b> The spell description of Aganazzar’s Scorcher states that it affects creatures 
                within a <b>5</b> feet by <b>30</b> feet line, 
                allowing it to potentially strike up to 6 creatures if they are lined up.
                <br />With this talent, that line becomes <b>10</b> foot wide by <b>35</b> foot long as all dimensions are increased. 
                <br />The new area of effect can potentially affect as many as 14 creatures!

                <p /><b>Example 2:</b> Fireball's spell description states that it affects creatures within a <b>20</b> foot radius sphere
                centered on a point within 150 feet. This affects a volume of <b>33,510.32</b> feet.
                <br />With this talent, the radius of the sphere increases to a <b>25</b> foot radius, affecting a volume of <b>65,449.85</b> feet!
                <br />However, note that the 150 feet ranged listed in the description is not an area of effect dimension, and therefore 
                the Fireball's central point must still be no more than 150 feet away from the user.

                <p /><b>Example 3:</b> Burning Hand's spell description states that it affects creatures within a <b>15</b> feet cone.
                <br />With Fire Lord, this spell now affects creatures within a <b>20</b> feet cone.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                In popular fantasy settings, Pyromancers tend to be characterized as unconcerned with the risks of powerful magic. 
                <br />This Talent burrows deep into that image of the maniacle arsonist doing anything 
                they can, even potentially harming themselves or even allies, if it means making a roaring boom or inferno.
                <br />To them, it's simple: The hotter the flame, the better.
                <p />Additionally, I wanted to take a moment here to mention that 5th Edition D&D doesn't include any 
                options to play as a mage of one specific element. This system fixes that and gives every elemental school their own unique 
                personality and gameplay to really sell their specialization and fantasy.
            </div>
            <br />
        </div>
    )
}

export { PyromancyTier6DesignTemplate };