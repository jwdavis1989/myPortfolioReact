import { Grid } from '@mui/material';

import { SpellListTalentTreeComponent } from "../../SpellListTalentTreeComponent";
import { PyromancyPlusOneDesignTemplate } from './PyromancyPlusOneDesignTemplate';

function PyromancyPlusOneTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">PYROMANCY SKILL</b>
                </Grid>
                <Grid item xs={6} className='AbilityCooldown'>
                    <b>PYROMANCY +1 EFFECT&nbsp;</b>
                </Grid>
            </Grid>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeaderSmall">TREE COMPLEXITY</b>
            <div className="animationFadeIn">
                Moderate
            </div>
            <p>
                <b className="AbilityHeaderSmall">SPELL PROFICIENCY</b>
                <div className="animationFadeIn">
                    You gain proficiency in Pyromancy magic.

                    <br /><b>Spellcasting Modifier:</b> You may use Intelligence or Wisdom for their accuracy and saving throws.
                    <br /><b>Spell Save DC:</b> 8 + Proficiency + Spellcasting Modifier
                    <br /><b>Spell Accuracy:</b> Proficiency + Spellcasting Modifier
                    <br /><b>Spell List:</b> You may cast any spell found within the Pyromancy Spell List that you have spent the below listed amount of skill points into Pyromancy to unlock.

                    <p /><b>Note:</b> This means you can not cast level 5 Pyromancy spells, even if you have 9 skill points into a different school of magic.
                    You must have 9 or more points spent specifically in Pyromancy.
                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">SPELL SLOTS BY LEVEL</b>
                <div className="animationFadeIn">
                    <SpellListTalentTreeComponent />
                </div>
            </p>
            <br />
            <p>
                <PyromancyPlusOneDesignTemplate />
            </p>
        </div>
    )
}

export { PyromancyPlusOneTemplate };