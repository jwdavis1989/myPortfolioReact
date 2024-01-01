import { Grid } from '@mui/material';
import { LeadershipTier18DesignTemplate } from './LeadershipTier18DesignTemplate';

function LeadershipTier18Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">CHECKMATE</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <span>LEADERSHIP TIER 18 TALENT&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                You gain an extra Bonus Action every turn that may only be used on Commands, however you cannot use the same command twice in one turn.
            </div>
            <br />
            <p>
                <LeadershipTier18DesignTemplate />
            </p>
        </div>
    )
}

export { LeadershipTier18Template };