import { Grid } from '@mui/material';

function InsatiableTouchTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">INSATIABLE TOUCH</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">COOLDOWN:  15 / 13.5 / 12 / 10.5 / 9 seconds</span><br /><br />
                </Grid>
            </Grid>
            Yingyue buffs an ally's omnivamp by 10/15/20/25/30%
            <span className="textColorCyan"> (+0.5% per 1% Heal and Shield Power) </span>
            for 2/2/2/3/4 seconds. Only affects attacks and abilities used on enemy champions.
            This ability can not be cast on yourself.
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">EMPOWERED</b>
                </Grid>
            </Grid>
            <br />Insatiable Touch now instantly cures Grievous Wounds and increases the ally's
            movement speed by 25% <span className="textColorIndigo">(+5% per 100 AP)</span> for 6 seconds.
            <br /><br />
        </div>
    )
}

export { InsatiableTouchTemplate };