import { Grid } from '@mui/material';

function PyromancyTier15DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">WILDFIRE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                This talent is a powerful increase to the Firelord Talent, doubling its potential effect.
                <br />Revisiting the Fire Lord examples:
                <p /><b>Example 1:</b> Aganazzar’s Scorcher affects creatures within a <b>5</b> feet by <b>30</b> feet line, 
                allowing it to potentially strike up to 6 creatures if they are lined up.
                <br />With this talent, that line becomes <b>15</b> foot wide by <b>40</b> foot long as all dimensions are increased. 
                <br />The new area of effect can potentially affect as many as 24 creatures!

                <p /><b>Example 2:</b> Fireball affects creatures within a <b>20</b> foot radius sphere
                centered on a point within 150 feet. This affects a volume of <b>33510.32</b> feet.
                <br />With this talent, the radius of the sphere increases to a <b>30</b> foot radius, affecting a volume of <b>113,097</b> feet!
                
                <p /><b>Example 3:</b> Burning Hand affects creatures within a <b>15</b> feet cone.
                <br />With Fire Lord, this spell now affects creatures within a <b>25</b> feet cone.
                <p />Additionally, remember that this effect actually improves your Combustion 
                Talent's effect significantly as a larger area of effect means significantly more Magma.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHAT CAN THE PLAYER CHOOSE NOT TO USE THIS EFFECT?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Sometimes, the situation may not allow for you to expand the area of effect of your 
                spells without risking yourself or your allies.
                <br />Letting the player choose from +0ft, +5ft, or +10ft to all area of effect dimensions 
                gives them flexible dials to tone the destruction up or down as needed.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                This further showcases the user's mastery over Fire magic, 
                and allows for some truly maniacal power moments when combined with Combustion.
            </div>
            <br />
        </div>
    )
}

export { PyromancyTier15DesignTemplate };