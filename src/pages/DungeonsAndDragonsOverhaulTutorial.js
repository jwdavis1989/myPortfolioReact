import React from 'react';
import { Button, Grid } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { LevelingPointsGuideComponent } from "../components/SWWOverhaul/LevelingPointsGuideComponent";
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants.js";

function DungeonsAndDragonsOverhaulTutorial() {
    return (
        <div>
            <div>
                <h3 className="SectionHeader">
                    Tutorial - Silverwind Workshop's Skill Trees
                    <hr className="HorizontalLineBlue" />
                </h3>
                <p className="NormalPageLayout">
                    <div className="textAlignLeft animationFadeIn">
                        <p>
                            <b className='textColorBlue'>
                                How Does it Work?
                            </b>
                            <br />
                            Characters created using this publication are not built from a list of premade classes,
                            rather they mix and match various Skill Points in any of 29 different skill trees to
                            unlock powerful Talents every 3 points spent in a skill tree.
                            <br />This allows players to effectively create their own custom class.
                            <br /><br />
                            <p>
                                <b className="textColorBlue">
                                    Skill Points & Max Skill Tree Level:
                                </b>
                                <br />
                                Whenever you level up, you gain a number of Skill Points equal to the amount listed in the <u><a href="#LevelingPointsGuide"><u><a href="#LevelingPointsGuide"><b>Leveling Points Guide</b></a></u></a></u>.
                                <br />
                                You may spend Skill Points in any skill tree to further empower your character's abilities, up to your Max Skill Tree Level.
                                <br />
                                Please see the <u><a href="#LevelingPointsGuide"><u><a href="#LevelingPointsGuide"><b>Leveling Points Guide</b></a></u></a></u> for the maximum level you may have in a Skill Tree based on your level.
                                <p />
                                <br />
                            </p>
                            <p>
                                <b className="textColorBlue">
                                    Spending Skill Points:
                                </b>
                                <br />Every time you add a Skill Point to a Skill Tree, you gain a bonus listed under the tree's <b className="textFontPixel">[+1]</b> Effect.
                                If that point pushes your Skill Tree Level to any multiple of 3, you also gain a powerful new ability called a Talent.
                                <p />
                                Talents are listed in the Skill Tree with a <b className="textFontPixel">[T3]</b>, <b className="textFontPixel">[T6]</b>, <b className="textFontPixel">[T9]</b>, <b className="textFontPixel">[T12]</b>, <b className="textFontPixel">[T15]</b>, or <b className="textFontPixel">[T18]</b> tag next to their name, signifying what Skill Tree Level you need to unlock them.
                                <p />
                                <br />
                            </p>
                            <p>
                                <b className="textColorBlue">
                                    Attribute Points:
                                </b>
                                <br />At levels 4, 8, 12, 16, and 20 you gain +2 Attribute Points.
                                These points may be spent to increase a chosen Ability Score (e.g. Strength or Dexterity) by +1 for each Attribute Point.
                                This increase may not increase an Ability Score above 20 unless you have a Skill Tree talent that states it increases the maximum points you may have in an Ability Score.
                            </p>
                            <p>
                                <b id="LevelingPointsGuide" className="textColorBlue">
                                    Leveling Points Guide:
                                </b>
                                <LevelingPointsGuideComponent />
                            </p>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button variant='outlined'
                                    title='Return to Top' style={{ fontSize: BUTTON_FONT_SIZE }}
                                    onClick={() => { document.getElementById('Skill Tree Demos').scrollIntoView(); }}
                                    startIcon={<KeyboardArrowUpIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}>
                                    Return to Top
                                </Button>
                            </Grid>
                        </p>
                    </div>
                </p>
            </div>
        </div>
    );
}

export { DungeonsAndDragonsOverhaulTutorial };