import { Grid } from '@mui/material';
import { MoonlitCurseDesignTemplate } from './MoonlitCurseDesignTemplate';

function MoonlitCurseTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">MOONLIT CURSE</b>
                </Grid>
                <Grid item xs={6} className="AbilityCooldown">
                    <span>[R]&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                Yingyue temporarily shares her curse in an area within 950 range.
                After a 0.627 second delay, any enemy champions still in the zone
                take 150/250/350<span className="textColorIndigo"> (+60% AP)</span> Magic Damage, are slowed by 80% decaying
                over 4 seconds, and if they die within the next 2/4/6 seconds they
                are brought back as a zombie with rapidly decaying health that will
                attack the nearest enemy champions for up to 15 seconds. Whenever
                Yingyue uses Vengeful Lunge, all Zombies leap to the same target.
                Zombies deal 40−200 <span className="textColorYellow">(based on level)</span> Magic Damage with an attack
                speed of 0.8 attacks per second.
            </div>
            <div className='AbilityCooldown'>
                <b>COOLDOWN:</b> 120 / 100 / 80 seconds
            </div>
            <br />
            <p>
                <MoonlitCurseDesignTemplate />
            </p>
        </div>
    )
}

export { MoonlitCurseTemplate };