import { Grid } from '@mui/material';

function ShieldedCombatTier9DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">UNBREAKABLE</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                As with many Tier 9 Talents, Unbreakable carves out a shining moment that is both powerful and unforgettable for the player.
                <br />
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY CAN'T CHARISMA BE A SPELLCASTING ATTRIBUTE?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Charisma is sometimes used as a spellcasting attribute in 5th edition Dungeons & Dragons, however this system does not allow that.
                <br />Essentially, Charisma is already a very powerful stat, and also interacts well with several Utility Skill Trees such as Leadership 
                and this system's equivalent to Bardic gameplay, Inspiration. 
                <br />Allowing a single attribute to be both be the best roleplay attribute and the best combat attribute would be a significant
                power difference compared to Wisdom or Intelligence, and would lead to a near-universal epidemic of every magic-focused character 
                having a large Charisma attribute. 
                <br />Therefore, allowing Charisma to be a spellcasting attribute would actually reduce player options, 
                rather than improve them.
            </div>
            <br />
        </div>
    )
}

export { ShieldedCombatTier9DesignTemplate };