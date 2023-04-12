import { Grid } from '@mui/material';

function LeadershipTier15DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PHALANX</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                A +1 AC & Dexterity bonus when in at least half cover is a very strong positional advantage for your entire team.
                <li>Half-Cover grants a +2 bonus to AC and Dexterity Saves when behind cover that blocks at least half of your body. A +1 additional bonus is a 50% increase to this benefit.</li>
                <li>Three-Quarters-Cover grants a +5 bonus to AC and Dexterity Saves when behind cover that blocks 3/4ths of your body. A +1 additional bonus is a 20% increase to this benefit.</li>
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY ONLY IN COVER?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                This greatly encourages your team to take advantage of the powerful cover system afforded to players in D&D.
                <br />As a Dungeon Master, you could use this ability to justify putting them into an epic holdout against 
                a massive horde of weaker enemies which really makes the players shine, especially the Leader.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                You've really got it all Commander.
                <br />You always have your team in the perfect position, you coordinate their attacks, and now you even make them 
                extremely resilient when in a fortified position.
                <p />A Phalanx is an Ancient Greek military formation that involves 
                overlapping shields to provide a powerful defensive boost against enemy attacks.
            </div>
            <br />
        </div>
    )
}

export { LeadershipTier15DesignTemplate };