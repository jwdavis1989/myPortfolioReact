import { Grid, Button, ButtonGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { LeadershipTalentTreeComponent } from '../components/SWWOverhaul/LeadershipTalentTreeComponent';
import { ShieldedCombatTalentTreeComponent } from '../components/SWWOverhaul/ShieldedCombatTalentTreeComponent';
import { PyromancyTalentTreeComponent } from '../components/SWWOverhaul/PyromancyTalentTreeComponent';
import { OverhaulOverviewComponent } from '../components/SWWOverhaul/OverhaulOverviewComponent';
import { BUTTON_FONT_SIZE, BUTTON_ICON_SIZE } from "../constants/constants.js";


import LeadershipIcon from '../resources/images/talentTreesImages/LeadershipIcon.png';
import ShieldedCombatIcon from '../resources/images/talentTreesImages/ShieldedCombatIcon.png';
import PyromancyIcon from '../resources/images/talentTreesImages/PyromancyIcon.png';
import OverviewIcon from '../resources/images/glowingEyeAnimation/glowingEyeAnimation.gif';
import SWWOverhaulBanner from '../resources/images/SW Skill Tree Banner.png';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import patchNotes from "../resources/handouts/Silverwind_Workshop_Skill_Tree_Change_Logs.rtf";
import DownloadIcon from '@mui/icons-material/Download';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


function DungeonsAndDragonsOverhaul() {
    const [selectedTree, setSelectedTree] = useState(0);
    const imageLogoDefaultClassesLeadership = "OverhaulImageLogo animationLeadershipIconFadeIn";
    const imageLogoDefaultClassesPyromancy = "OverhaulImageLogo animationPyromancyIconFadeIn";
    const imageLogoDefaultClassesShieldedCombat = "OverhaulImageLogo animationShieldedCombatIconFadeIn";
    const imageLogoDefaultClassesNoAnimation = "OverhaulImageLogo";

    useEffect(() => {
        setSelectedTree(0);
    }, []);

    function resetSelectTreeHighlight() {
        document.getElementById("LeadershipTreeLogo").className = imageLogoDefaultClassesNoAnimation;
        document.getElementById("PyromancyLogo").className = imageLogoDefaultClassesNoAnimation;
        document.getElementById("ShieldedCombatLogo").className = imageLogoDefaultClassesNoAnimation;
        document.getElementById("OverviewLogo").className = imageLogoDefaultClassesNoAnimation;
    }

    function RenderTreeDescription(props) {
        let description = "";
        resetSelectTreeHighlight();
        if (props.slot === 1) {
            document.getElementById("LeadershipTreeLogo").className = "OverhaulImageLogoSelected";
            description = <LeadershipTalentTreeComponent />
        }
        else if (props.slot === 2) {
            document.getElementById("PyromancyLogo").className = "OverhaulImageLogoSelected";
            description = <PyromancyTalentTreeComponent />
        }
        if (props.slot === 3) {
            document.getElementById("ShieldedCombatLogo").className = "OverhaulImageLogoSelected";
            description = <ShieldedCombatTalentTreeComponent />
        }
        if (props.slot === 4) {
            document.getElementById("OverviewLogo").className = "OverhaulImageLogoSelected";
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
                <img className="NormalPageLayout" src={SWWOverhaulBanner}
                    alt="Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon Banner" />
                <Grid container spacing={0}>
                    <Grid item xs={1.2} />
                    <Grid item xs={9.6} >
                        <ButtonGroup className='NavBarButtonGroup' fullWidth>
                            <Button className="ImageLogo" startIcon={<LocalGroceryStoreIcon style={{ fontSize: BUTTON_ICON_SIZE}} />}
                                style={{ fontSize: BUTTON_FONT_SIZE, width: "100%" }}
                                component="a" href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                                Store Page
                            </Button>
                            <Button className="ImageLogo" startIcon={<DownloadIcon style={{ fontSize: BUTTON_ICON_SIZE}} />}
                                style={{ fontSize: BUTTON_FONT_SIZE, width: "100%" }}
                                component="a" href={patchNotes} target="_blank" rel="noreferrer">
                                Patch Notes
                            </Button>
                            <Button component={Link} to="/SWWLevelingOverhaulTutorial" onClick={() => window.scrollTo(0, 0)}
                                className="ImageLogo" startIcon={<HelpOutlineIcon style={{ fontSize: BUTTON_ICON_SIZE}} />}
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
                </div>
                <Grid container spacing={0} id="Row 3 Example Tree Icons">
                    <Grid item xs={1.5}>
                        <p className="HeaderTitleWide">
                            TUTORIAL
                        </p>
                        <p>
                            <img onClick={() => setSelectedTree(4)}
                                className="OverhaulImageLogoSelected" src={OverviewIcon}
                                id="OverviewLogo" alt="Overview Icon" title='Overview'>
                            </img>
                        </p>
                        <p className="HeaderTitleWide">
                            DEMO TREES
                        </p>
                        <div onClick={() => setSelectedTree(1)} width='100%'>
                            <img
                                className={imageLogoDefaultClassesLeadership} src={LeadershipIcon}
                                id="LeadershipTreeLogo" alt="Leadership Icon" title='Leadership'>
                            </img>
                        </div>
                        <div onClick={() => setSelectedTree(2)}>
                            <img
                                className={imageLogoDefaultClassesPyromancy} src={PyromancyIcon}
                                id="PyromancyLogo" alt="Pyromancy Icon" title='Pyromancy'>
                            </img>
                        </div>
                        <div onClick={() => setSelectedTree(3)}>
                            <img
                                className={imageLogoDefaultClassesShieldedCombat} src={ShieldedCombatIcon}
                                id="ShieldedCombatLogo" alt="Shielded Combat Icon" title='Shielded Combat'>
                            </img>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="SelectedTreeDescription" className="NormalPageLayoutSlim AbilityDescriptionSection">
                            {!selectedTree >= 1 ?
                                <span>
                                    <OverhaulOverviewComponent />
                                </span> : <RenderTreeDescription slot={selectedTree} />}
                        </div>
                    </Grid>
                </Grid>
            </p>
        </div>
    );
}

export { DungeonsAndDragonsOverhaul };