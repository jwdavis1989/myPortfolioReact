import { Grid, Button, ButtonGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { LeadershipTalentTreeComponent } from '../components/SWWOverhaul/LeadershipTalentTreeComponent';
import { ShieldedCombatTalentTreeComponent } from '../components/SWWOverhaul/ShieldedCombatTalentTreeComponent';
import { PyromancyTalentTreeComponent } from '../components/SWWOverhaul/PyromancyTalentTreeComponent';
import { OverhaulOverviewComponent } from '../components/SWWOverhaul/OverhaulOverviewComponent';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants.js";

import SWWOverhaulBanner from '../resources/images/SW Skill Tree Banner.png';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import patchNotes from "../resources/handouts/Silverwind_Workshop_Skill_Tree_Change_Logs.rtf";
import DownloadIcon from '@mui/icons-material/Download';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


function DungeonsAndDragonsOverhaul() {
    const [selectedTree, setSelectedTree] = useState(0);

    useEffect(() => {
        setSelectedTree(0);
    }, []);

    function RenderTreeDescription(props) {
        let description = "";
        if (props.slot === 1) {
            description = <LeadershipTalentTreeComponent />
        }
        else if (props.slot === 2) {
            description = <PyromancyTalentTreeComponent />
        }
        if (props.slot === 3) {
            description = <ShieldedCombatTalentTreeComponent />
        }
        if (props.slot === 4) {
            description = <OverhaulOverviewComponent />
        }
        return description;
    }

    return (
        <div>
            <h2 className="SectionHeader">
                Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon
                <hr className="HorizontalLineBlue" />
            </h2>
            <p className="NormalPageLayout">
                <img className="NewBannerImage" src={SWWOverhaulBanner}
                    alt="Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon Banner" />
                <Grid container spacing={0}>
                    <Grid item xs={1.2} />
                    <Grid item xs={9.6} >
                        <ButtonGroup className='NavBarButtonGroup' fullWidth>
                            <Button className="ImageLogo" startIcon={<LocalGroceryStoreIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}
                                style={{ fontSize: BUTTON_FONT_SIZE, width: "100%" }}
                                component="a" href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                                Store Page
                            </Button>
                            <Button className="ImageLogo" startIcon={<DownloadIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}
                                style={{ fontSize: BUTTON_FONT_SIZE, width: "100%" }}
                                component="a" href={patchNotes} target="_blank" rel="noreferrer">
                                Patch Notes
                            </Button>
                            <Button component={Link} to="/SWWLevelingOverhaulTutorial" onClick={() => window.scrollTo(0, 0)}
                                className="ImageLogo" startIcon={<HelpOutlineIcon style={{ fontSize: BUTTON_ICON_SIZE }} />}
                                style={{ fontSize: BUTTON_FONT_SIZE, width: "100%" }}>
                                Tutorial
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <div className="textAlignLeft animationFadeIn">
                    <p>
                        <b className='textColorBlue'>Contributions:</b>
                        <br />
                        Game Designer, Artist, QA Analyst
                    </p>
                    <p>
                        <b className='textColorBlue'>
                            Overview:
                        </b>
                        <br />
                        Published and available on roll20's virtual tabletop, Silverwind Workshop's Skill Trees & Leveling Overhaul
                        strives to take 5th edition D&D to the next level. Revamping classes, combat, and crafting gameplay loops. This addon
                        is more than just a leveling overhaul. Build a character by spending talent points in your choice of 29 skill trees,
                        adding significantly more character concepts to create your dream character!
                    </p>
                    <p>
                        <b className='textColorBlue'>
                            What Problems From D&D 5th Edition Does This System Solve?:
                        </b>
                        <br />
                        <ul>
                            <li>
                                Limited character playstyles.
                            </li>
                            <li>
                                Martial & caster power and gameplay disparity.
                            </li>
                            <li>
                                Crafting rules and gameplay are not supported well.
                            </li>
                            <li>
                                Single-Element Mages are not fleshed out, while
                                mixing spell Schools is Poorly Supported.
                            </li>
                        </ul>
                    </p>
                    <p>
                        <h3 id="Skill Tree Demos" className="SectionHeader">
                            Interactive Skill Tree Demo & Design Insights:
                            <hr className="HorizontalLineBlue" />
                        </h3>
                        <Grid container spacing={0} id="Row 3 Example Tree Icons Reworked">
                            <Grid item xs={12}>
                                <ButtonGroup variant='outlined' fullWidth>
                                    <Button
                                        title='Previous Ability' style={{ fontSize: BUTTON_FONT_SIZE }}
                                        onClick={() => { setSelectedTree(1); document.getElementById('Skill Tree Demos').scrollIntoView() }} >
                                        Leadership
                                    </Button>
                                    <Button
                                        title='Previous Ability' style={{ fontSize: BUTTON_FONT_SIZE }}
                                        onClick={() => { setSelectedTree(2); document.getElementById('Skill Tree Demos').scrollIntoView(); }} >
                                        Pyromancy
                                    </Button>
                                    <Button
                                        title='Previous Ability' style={{ fontSize: BUTTON_FONT_SIZE }}
                                        onClick={() => { setSelectedTree(3); document.getElementById('Skill Tree Demos').scrollIntoView(); }} >
                                        Shielded Combat
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <p>
                            <hr className="HorizontalLineBlue" />
                            <div id="SelectedTreeDescription" className="NormalPageLayoutSlim">
                                <h3 className="textAlignCenter animationcolorWhiteOrangeFlashing">
                                    Select a Skill Tree Demo to see its Description and Design Insights.
                                </h3>
                                {!selectedTree >= 1 ?
                                    "" : <RenderTreeDescription slot={selectedTree} />}
                            </div>
                        </p>
                    </p>
                </div>
            </p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export { DungeonsAndDragonsOverhaul };