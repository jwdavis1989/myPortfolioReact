import { Grid } from '@mui/material';

function LeadershipPlusOneTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">LEADERSHIP SKILL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">LEADERSHIP +1 EFFECT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">TREE COMPLEXITY</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Moderate-to-High
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">

                <br />
                You increase the Initiative of all friendly creatures (including yourself) within hearing distance by <b>+1 Bonus Initiative</b> for every 3 points spent in Leadership.

                Creatures can not gain this benefit from more than 1 source.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">PROFICIENCY</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                You gain proficiency in Persuasion and Insight.
            </div>
        </div>
    )
}

export { LeadershipPlusOneTemplate };