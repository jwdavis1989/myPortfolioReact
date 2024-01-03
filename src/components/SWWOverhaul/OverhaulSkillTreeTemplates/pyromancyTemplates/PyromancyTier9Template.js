import { Grid } from '@mui/material';
import { PyromancyTier9DesignTemplate } from './PyromancyTier9DesignTemplate';

function PyromancyTier9Template() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">COMBUSTION</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>TIER 9 TALENT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">EFFECT</b>
            <div className="animationFadeIn">
                Once per long rest, you may spend 1 Bonus Action in order to empower your next <b className="textColorRed">Fire Damage</b> spell that targets an area. The affected spell gains the effect of your Ignition and leaves behind a Magma Surface that covers the same area as the spell.
                <p />
                The Magma Surface cannot be extinguished and lasts for <b>24 hours</b>.
                <p />
                Creatures take <b className="textColorRed">Fire Damage</b> equal to your Ignition whenever they end their turn in the Magma Surface, or for every 5ft they travel through it.
            </div>
            <br />
            <p>
                <PyromancyTier9DesignTemplate />
            </p>
        </div>
    )
}

export { PyromancyTier9Template };