import { Grid, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants";

function Footer() {
    return (
        <div className="Footer">
            <hr className="HorizontalLineBlue" />
            <br />
            <p>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button variant='outlined'
                        title='Return to Top' style={{ fontSize: BUTTON_FONT_SIZE }}
                        onClick={() => { document.getElementById('Header Banner Section').scrollIntoView(); }}
                        startIcon={<KeyboardArrowUpIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}>
                        Return to Top
                    </Button>
                </Grid>
            </p>
            <br />
            <br />
            <br />
        </div>
    );
}

export { Footer };