import { Grid } from '@mui/material';
import { JadeReachDesignTemplate } from './JadeReachDesignTemplate';

function JadeReachTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">JADE REACH</b>
                </Grid>
                <Grid item xs={6} className="AbilityCooldown">
                    <span>[Q]&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                Yingyue steals Qi from a target within 600 range, dealing 80/100/120/140/160
                <span className="textColorIndigo"> (+60% AP)</span> magic damage. If used on an enemy champion, she gains a stack of Qi.
            </div>
            <br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EMPOWERED</b>
                </Grid>
            </Grid>
            <div className="animationFadeIn">
                Jade Reach now also heals Yingyue for 40/80/120/160/200
                <span className="textColorGreen"> (+5% missing health)</span> if it damages an enemy champion.
            </div>
            <div className='AbilityCooldown'>
                <b>COOLDOWN:</b> 9 / 7.9 / 6.8 / 5.7 / 4.6 seconds
            </div>
            <br />
            <p>
                <JadeReachDesignTemplate />
            </p>
        </div>
    )
}

export { JadeReachTemplate };