import { Grid } from '@mui/material';

function LeadershipPlusOneDesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">LEADERSHIP SKILL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                The goal of this skill effect is to express your leadership and wit. 
                You gain proficiency in Insight and Persuasion which are 
                critical tools for leadership, especially when it comes to inspiring your team to greatness.
                <br />Furthermore, you extend that knowledge to your team in the form of an Initiative increasing
                aura for all that can hear you nearby. This allows your team to act faster and perform their plan more 
                seamlessly.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY CAN'T YOU GAIN THE EFFECT FROM MULTIPLE SOURCES?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                D&D 5e has bounded values for a lot of its mechanics. Essentially even a max level character can only see 
                values for some stats (such as initiative) get so high even compared to low level creatures. This ensures
                that even low level monsters, especially in large groups, can be a threat and keeps the power creep down.
                Reduced Power Creep helps keep the math easier for the average player to keep the game running smoothly.
                <br />Therefore, if we allow this powerful aura to stack, your team would completely remove the concept of
                initiative as your allies would only go before the enemy monsters.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                This skill directly reflects your increased eye for strategy as you can take any 
                combat situation and give your team a tactical boost towards acting quicker and more decisively.
                <br />Roleplaywise, maybe it manifests as using the terrain to your advantage, 
                being aware of the potential for attack, 
                or having insight into the enemy's tactics.
            </div>
            <br />
        </div>
    )
}

export { LeadershipPlusOneDesignTemplate };