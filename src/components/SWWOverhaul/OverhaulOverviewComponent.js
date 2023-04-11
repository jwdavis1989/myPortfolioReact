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
                    <div className="NormalPageLayoutLeft">
                        Characters created using this publication are not built from a list of premade classes,
                        rather they mix and match various Skill Points in any of 29 different skill trees to
                        unlock powerful Talents every 3 points spent in a skill tree.
                        <br />This allows players to effectively create their own custom class.

                        <p>
                            <b>Skill Points & Max Skill Tree Level:</b>
                            <br />Whenever you level up, you gain a number of Skill Points equal to the amount listed in the Leveling Points Guide.


                            <p />
                            You may spend Skill Points in any skill tree to further empower your character's abilities, up to your Max Skill Tree Level.
                            Please see the Leveling Points Guide for the maximum level you may have in a Skill Tree based on your level.
                            <p />
                            <b>Spending Skill Points:</b>
                            <br />Every time you add a Skill Point to a Skill Tree, you gain a bonus listed under the tree's [+1] Effect.
                            If that point pushes your Skill Tree Level to any multiple of 3, you also gain a powerful new effect called a Talent.
                            <p />
                            Talents are listed in the Skill Tree with a [T3], [T6], [T9], [T12], [T15], or [T18] tag next to their name, signifying what Skill Tree Level you need to unlock them.
                            <p />
                            <b>Attribute Points:</b>
                            <br />At levels 4, 8, 12, 16, and 20 you gain +2 Attribute Points.
                            These points may be spent to increase a chosen Ability Score (e.g. Strength or Dexterity) by +1 for each Attribute Point.
                            This increase may not increase an Ability Score above 20 unless you have a Skill Tree talent that states it increases the maximum points you may have in an Ability Score.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={11}>
                    <br />
                    <p className="SmallHeaderTitleNoHover width100">
                        WHAT PROBLEMS DOES THIS SYSTEM SOLVE?
                    </p>
                    <div className="NormalPageLayoutLeft">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { OverhaulOverviewComponent };