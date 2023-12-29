import { Grid } from '@mui/material';
import { LeadershipTier18DesignTemplate } from './LeadershipTier18DesignTemplate';

function LeadershipTier18Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">CHECKMATE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">LEADERSHIP TIER 18 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                You gain an extra Bonus Action every turn that may only be used on Commands, however you cannot use the same command twice in one turn.
            </div>
            <LeadershipTier18DesignTemplate />
        </div>
    )
}

export { LeadershipTier18Template };