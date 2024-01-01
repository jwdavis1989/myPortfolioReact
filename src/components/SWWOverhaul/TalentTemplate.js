import { Grid } from "@mui/material";

function TalentTemplate({ title = false, insightSection = false, treeName, talentName, talentSlot, header="", body }) {
    return (
        <div>
            {title ?
                <span>
                    <hr className="HorizontalLineBlue" />
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <b className="AbilityHeader">{talentName}</b>
                        </Grid>
                        <Grid item xs={6} className='AbilityCooldown'>
                            <span>{treeName + " " + talentSlot}&nbsp;</span>
                        </Grid>
                    </Grid>
                    <hr className="HorizontalLineBlue" />
                </span>
                : ""}
            {insightSection ?
                <span>
                    <hr className="HorizontalLineBlue" />
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <b className="AbilityHeader textColorRed animationcolorWhiteOrangeFlashing">DESIGN INSIGHTS</b>
                        </Grid>
                    </Grid>
                    <hr className="HorizontalLineBlue" />
                    <div className="animationFadeIn">
                        {body}
                    </div>
                    <br />
                </span>
                : <span>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <b className="AbilityHeaderSmall">{header}</b>
                        </Grid>
                    </Grid>
                    <div className="animationFadeIn">
                        {body}
                    </div>
                    <br />
                </span>
            }
        </div>
    )
}

export { TalentTemplate };