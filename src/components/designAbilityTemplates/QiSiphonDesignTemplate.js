import { Grid } from '@mui/material';

function QiSiphonDesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">QI SIPHON</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <br />
            This ability represents the Jiangchi's unique flavor of vampirism.
            I have always loved the ability to empower one of your abilities as it creates a
            lot of strategic choice when playing this kind of champion.
            <br />
            Furthermore, this ability forms a strong thematic connection between Yingyue and
            another Ionian priestess that can empower her spells, Karma.
            <br />
            This creates a strong story connection with a spiritual leader and a culture that she can no longer 
            return to due to her cursed form and hunger for Qi. The two characters would have very interesting interactions
            and opposing beliefs to be sure.

            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY LET ENEMIES SEE HER QI?</b>
                </Grid>
            </Grid>
            <br /> This is based upon two of the fundamental building blocks of game design, counterplay & decision-making.
            <br /> Enemy champions see her number of stacks represented as a bar with three sections that
            fill 1 section per Qi currently stored.
            <br />
            Because of this, enemies can tell when Yingyue is likely to use one of her powerful empowered abilities and can plan accordingly.
            <br />
            But even Yingyue benefits from this, as now she may bait the enemy into thinking she won't empower an ability anytime soon.
            <br />
            She can wait to use both her Jade Reach and Resentful Lunge while at 1 or 2 stacks of Qi.
            <br /><ul>
                <li>
                    If she has 1 stack, she can use both Qi stealing abilities in rapid succession to then empower her Insatiable Touch on an ally for
                    an aggressive complement to any teammate. However as a trade off, she is now in melee range with her opponent.
                </li>
                <br />
                <li>

                    If she has 2 stacks, she can use either Qi stealing abilities, then immediately cast any of her empowered spells in quick succession.
                    This is balanced by the fact that both abilities put her into harm's reach and only reward Qi on attacks against champions.
                </li>
            </ul>
                    <br />
                    This Passive ability reinforces a constant decision-making dynamic between Yingyue and her opponent.
            <br /><br />
        </div>
    )
}

export { QiSiphonDesignTemplate };