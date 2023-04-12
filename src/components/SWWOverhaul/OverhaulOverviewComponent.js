import swwOverhaulLogo from "../../resources/images/SW Skill Tree Logo Final 1024px.png";
import { Grid } from '@mui/material';

function OverhaulOverviewComponent() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <br /><br />
                    <img className='ImageBorder' src={swwOverhaulLogo} width="95%" alt="D&D Overhaul" />
                </Grid>
                <Grid item xs={7}>
                    <br />
                    <p className="SmallHeaderTitleNoHover width100">
                        HOW DOES IT WORK?
                    </p>
                    <div className="NormalPageLayoutLeft ScrollingBox">
                        Characters created using this publication are not built from a list of premade classes,
                        rather they mix and match various Skill Points in any of 29 different skill trees to
                        unlock powerful Talents every 3 points spent in a skill tree.
                        <br />This allows players to effectively create their own custom class.
                        <br /><br />
                        <p>
                            <span className="AbilityHeaderSmall moveRight0">Skill Points & Max Skill Tree Level:</span>
                            <p />Whenever you level up, you gain a number of Skill Points equal to the amount listed in the Leveling Points Guide.


                            <p />
                            You may spend Skill Points in any skill tree to further empower your character's abilities, up to your Max Skill Tree Level.
                            Please see the Leveling Points Guide for the maximum level you may have in a Skill Tree based on your level.
                            <p />
                            <br />
                            <span className="AbilityHeaderSmall moveRight0">Spending Skill Points:</span>
                            <p />Every time you add a Skill Point to a Skill Tree, you gain a bonus listed under the tree's [+1] Effect.
                            If that point pushes your Skill Tree Level to any multiple of 3, you also gain a powerful new ability called a Talent.
                            <p />
                            Talents are listed in the Skill Tree with a <b className="textFontPixel">[T3]</b>, <b className="textFontPixel">[T6]</b>, <b className="textFontPixel">[T9]</b>, <b className="textFontPixel">[T12]</b>, <b className="textFontPixel">[T15]</b>, or <b className="textFontPixel">[T18]</b> tag next to their name, signifying what Skill Tree Level you need to unlock them.
                            <p />
                            <br />
                            <span className="AbilityHeaderSmall moveRight0">Attribute Points:</span>
                            <p />At levels 4, 8, 12, 16, and 20 you gain +2 Attribute Points.
                            These points may be spent to increase a chosen Ability Score (e.g. Strength or Dexterity) by +1 for each Attribute Point.
                            This increase may not increase an Ability Score above 20 unless you have a Skill Tree talent that states it increases the maximum points you may have in an Ability Score.
                        </p>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <br />
                    <p className="SmallHeaderTitleNoHover width100">
                        WHAT PROBLEMS DOES THIS SYSTEM SOLVE?
                    </p>
                    <div className="NormalPageLayoutLeft ScrollingBox"><p />
                        <span className="AbilityHeaderSmall moveLeft5">Limited Character Playstyles & Classes:</span>
                        <p />
                        Every time you add a Skill Point to a Skill Tree, you gain a bonus listed under the tree's [+1] Effect.
                        If that point pushes your Skill Tree Level to any multiple of 3, you also gain a powerful new ability called a Talent.
                        <p />
                        <span className="AbilityHeaderSmall moveLeft5">Limited Character Playstyles & Classes:</span>
                        <p />
                        Every time you add a Skill Point to a Skill Tree, you gain a bonus listed under the tree's [+1] Effect.
                        If that point pushes your Skill Tree Level to any multiple of 3, you also gain a powerful new ability called a Talent.
                        <p />
                        <span className="AbilityHeaderSmall moveLeft5">Limited Character Playstyles & Classes:</span>
                        <p />
                        Every time you add a Skill Point to a Skill Tree, you gain a bonus listed under the tree's [+1] Effect.
                        If that point pushes your Skill Tree Level to any multiple of 3, you also gain a powerful new ability called a Talent.
                        <p />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { OverhaulOverviewComponent };