import { Grid } from '@mui/material';
import { LeadershipTier12DesignTemplate } from './LeadershipTier12DesignTemplate';

function LeadershipTier12Template() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">VETERAN EXPERTISE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown">LEADERSHIP TIER 12 TALENT</span><br /><br />
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">EFFECT</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br />
                Through countless battles, you've refined your tactical commands, granting each a bonus listed below.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">COMMAND UPGRADES</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                <br /><b>Command - En Passant:</b>
                <br />Now grants all affected creatures up to 10ft of movement instead of 5ft.

                <p /><b>Command - Knight Takes Pawn:</b>
                <br />Your ally's weapon attack deals bonus damage equal to your Charisma Modifier.

                <p /><b>Command - Promotion:</b>
                <br />Your ally's next attack now deals bonus damage equal to your Charisma Modifier.

                <p /><b>Command - Unpin Pawn:</b>
                <br />Now grants the affected creature advantage on the Saving Throw.
            </div>
            <LeadershipTier12DesignTemplate />
        </div>
    )
}

export { LeadershipTier12Template };