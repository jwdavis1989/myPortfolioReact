import { Grid } from '@material-ui/core';

function JadeReachTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">JADE REACH</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">COOLDOWN: 9 / 7.9 / 6.8 / 5.7 / 4.6 seconds</span><br /><br />
                </Grid>
            </Grid>
            Yingyue steals Qi from a target within 600 range, dealing 80/100/120/140/160
            <span className="textColorIndigo"> (+60% AP)</span> magic damage. If used on an enemy champion, she gains a stack of Qi.
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">EMPOWERED</b>
                </Grid>
            </Grid>
            <br /> Jade Reach now also heals Yingyue for 40/80/120/160/200<span className="textColorGreen"> (+5 % missing health)</span>.
            <br /><br />
        </div>
    )
}

export { JadeReachTemplate };