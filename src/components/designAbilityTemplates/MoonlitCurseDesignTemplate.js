import { Grid } from '@material-ui/core';

function MoonlitCurseDesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">MOONLIT CURSE: DESIGN INSIGHTS</b>
                </Grid>
            </Grid>
            <br />
            This ability has two primary purposes:
            <ul>
                <li>
                    A damaging area of effect slow that will likely spell the doom of any fleeing opponent 
                    or allow your team to engage on a crippled enemy.
                </li>
                <li>
                    A way to turn the corpse of an enemy champion into a loyal zombie minion that will attack 
                    the same target you do. They also leap to your target whenever you use Resentful Lunge.
                </li>
            </ul>
            <br /> How you use it will depend on the situation and the rank of the ability. 
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">WHY DOES THE RANK MATTER?</b>
                </Grid>
            </Grid>
            <br />
            At lower levels, this ability can't generally be used for both purposes simultaneously 
            as the target champion must be killed within 2 seconds of application. 
            <br />
            At higher levels, the duration increases to 4 and then 6 seconds. This allows it to serve both 
            purposes reliably and scale into late game where enemies often take longer to kill.
            <br />
            Catching enemies/engaging fights and turning any that die into new damage dealing minions is a 
            powerful way to support your team and fits her theming as an aggressive enchanter very well.
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">THEMING</b>
                </Grid>
            </Grid>
            <br /> 
            Moonlit Curse shows off Yingyue's ability to not just harvest Qi, but control Qi to puppeteer her 
            enemies and give them a brief taste of her wretched existence.
            <br /><br />
        </div>
    )
}

export { MoonlitCurseDesignTemplate };