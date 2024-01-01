import { Grid } from '@mui/material';
import { InsatiableTouchDesignTemplate } from './InsatiableTouchDesignTemplate';

function InsatiableTouchTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">INSATIABLE TOUCH</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <span>[E]&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                Yingyue buffs an ally's omnivamp by 10/15/20/25/30%
                <span className="textColorCyan"> (+0.5% per 1% Heal and Shield Power) </span>
                for 2/2/2/3/4 seconds. Only affects attacks and abilities used on enemy champions.
                This ability can not be cast on yourself.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EMPOWERED</b>
                </Grid>
            </Grid>
            <div className="animationFadeIn">
                Insatiable Touch now instantly cures Grievous Wounds and increases the ally's
                movement speed by 25% <span className="textColorIndigo">(+5% per 100 AP)</span> for 6 seconds.
            </div>
            <div className='AbilityCooldown'>
                <b>COOLDOWN:</b>  15 / 13.5 / 12 / 10.5 / 9 seconds
            </div>
            <br />
            <p>
                <InsatiableTouchDesignTemplate />
            </p>
        </div>
    )
}

export { InsatiableTouchTemplate };