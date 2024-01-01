import { Grid } from '@mui/material';
import { LeadershipTier6DesignTemplate } from './LeadershipTier6DesignTemplate';

function LeadershipTier6Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">ON THE MOVE</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <span>LEADERSHIP TIER 6 TALENT&nbsp;</span>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
            At the beginning of your turn, you may grant one allied creature within hearing range the ability to 
                immediately move up to 15ft, however if you do so, you cannot move until the beginning of your next turn.
                <br />
                This movement may provoke Attacks of Opportunity.
            </div>
            <br />
            <p>
                <LeadershipTier6DesignTemplate />
            </p>
        </div>
    )
}

export { LeadershipTier6Template };