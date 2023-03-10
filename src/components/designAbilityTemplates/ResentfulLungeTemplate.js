import { Grid } from '@material-ui/core';

function ResentfulLungeTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">RESENTFUL LUNGE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">COOLDOWN: 8 / 7.5 / 7 / 6.5 / 6 seconds</span><br /><br />
                </Grid>
            </Grid>
            Yingyue leaps through the air, dashing to a target unit within 700 distance.
            When used on an enemy champion, they take 70/105/140/175/210
            <span className="textColorIndigo"> (+40% AP)</span> Magic Damage and
            she gains a stack of Qi.
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">EMPOWERED</b>
                </Grid>
            </Grid>
            <br />Resentful Lunge can be used a second time within 3 seconds for free.
            The second use of Resentful Lunge doesn't provide a stack of Qi, knocks the target up for 1 second,
            and afterwards slows them by 60% for 1.5 seconds.
        </div>
    )
}

export { ResentfulLungeTemplate };