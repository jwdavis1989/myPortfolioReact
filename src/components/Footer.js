import { Grid } from '@mui/material';

function Footer() {
    return (
        <div>
            <Grid id="Row 0 Banner" container spacing={0} className="">
                <Grid item md={2} sm={0} xs={0} />
                <Grid item md={8} sm={12} xs={12} className="Footer">
                    <hr></hr>
                </Grid>
            </Grid>
        </div>
    );
}

export { Footer };