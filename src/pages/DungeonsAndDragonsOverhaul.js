import { Grid } from '@mui/material';
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';

import { LeadershipTalentTreeComponent } from '../components/SWWOverhaul/LeadershipTalentTreeComponent';
import { ShieldedCombatTalentTreeComponent } from '../components/SWWOverhaul/ShieldedCombatTalentTreeComponent';

function DungeonsAndDragonsOverhaul() {

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <p className="HeaderTitleWide">
                        <CasinoSharpIcon fontSize='inherit' /> OVERVIEW
                    </p>
                    <p className="HeaderTitleWide">
                        WHAT PROBLEMS DOES THIS SYSTEM SOLVE?
                    </p>
                    <p>
                        <LeadershipTalentTreeComponent />
                        <br />
                    </p>
                    <p>
                        <ShieldedCombatTalentTreeComponent />
                        <br />
                    </p>
                    <p>
                        <LeadershipTalentTreeComponent />
                        <br />
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}

export { DungeonsAndDragonsOverhaul };