import { Grid } from '@mui/material';

function QiSiphonTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">QI SIPHON</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">PASSIVE</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                Every time Yingyue damages a champion with Jade Reach or Resentful Lunge,
                she gains a stack of Qi. When she reaches 3 stacks of Qi,
                her next ability is empowered. She can hold up to 3 Qi at
                a time and all are expended when an empowered ability is cast.
                <br />Qi stacks are visible to everyone as a Jade-Green resource bar
                under Yingyue's health bar
            </div>
            <br />
        </div>
    )
}

export { QiSiphonTemplate };