import { Grid } from '@material-ui/core';
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';

import { TalentTreeComponent } from '../components/SWWOverhaul/TalentTreeComponent';

function DungeonsAndDragonsOverhaul() {

    return (
        <div>
            <Grid container spacing={0}>
            <Grid item xs={1}/>
                <Grid item xs={10}>
                    <p className="HeaderTitleWide">
                        <CasinoSharpIcon fontSize='inherit' /> OVERVIEW
                    </p>
                    <p className="HeaderTitleWide">
                        WHAT PROBLEMS DOES THIS SYSTEM SOLVE?
                    </p>
                    <p>
                        <TalentTreeComponent />
                    </p>
                    <p>
                        <CasinoSharpIcon fontSize='inherit' /> SKILL TREE 2
                    </p>
                    <p>
                        <CasinoSharpIcon fontSize='inherit' /> SKILL TREE 3
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}

export { DungeonsAndDragonsOverhaul };