import { Grid } from '@mui/material';

function PyromancyPlusOneDesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PYROMANCY SKILL</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
                Every Magic Skill Tree contains a similar +1 effect, namely granting new spell 
                slots and setting the player's casting stats such as spellcasting attributes and spell save DC.
                <p /><b>Note:</b> Spell Save DC is the number a creature must roll against to determine if saving-throw-based spells affect them.
                <br />A player's Spellcasting Attribute is the stat they use to determine spell accuracy, spell save DC, and sometimes damage.
                <p />If you have points in multiple Magic Skill Trees, you add the total number of spells slots gained together. However, as previously 
                stated, to cast a spell of a certain level, you need to have unlocked that spell's spell slot in the Magic Skill Tree you obtained it from.
                <p /><b>Example:</b> Fireball is a level 3 Pyromancy spell. To cast it, you must have at least 5 points spent in the Pyromancy Skill Tree.
                Even if you have 20 points in a different Magic Skill Tree, you can not cast fireball until you put 5 points into Pyromancy.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">WHY CAN'T CHARISMA BE A SPELLCASTING ATTRIBUTE?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeft moveLeft20">
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

export { PyromancyPlusOneDesignTemplate };