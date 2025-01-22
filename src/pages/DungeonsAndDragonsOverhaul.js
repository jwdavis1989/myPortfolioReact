import { Grid, Button, ButtonGroup, Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { LeadershipTalentTreeComponent } from '../components/SWWOverhaul/LeadershipTalentTreeComponent';
import { ShieldedCombatTalentTreeComponent } from '../components/SWWOverhaul/ShieldedCombatTalentTreeComponent';
import { PyromancyTalentTreeComponent } from '../components/SWWOverhaul/PyromancyTalentTreeComponent';
import { DungeonsAndDragonsOverhaulTutorial } from '../pages/DungeonsAndDragonsOverhaulTutorial';

import { BUTTON_ICON_MARGIN_RIGHT } from "../constants/constants.js";

import SWWOverhaulBanner from '../resources/images/SW Skill Tree Banner.png';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import patchNotes from "../resources/handouts/Silverwind_Workshop_Skill_Tree_Change_Logs.rtf";
import DownloadIcon from '@mui/icons-material/Download';
import LeadershipIcon from '../resources/images/talentTreesImages/LeadershipIcon.png';
import PyromancyIcon from '../resources/images/talentTreesImages/PyromancyIcon.png';
import ShieldedCombatIcon from '../resources/images/talentTreesImages/ShieldedCombatIcon.png';
import glowingEyeLogo from "../resources/images/glowingEyeAnimation/glowingEyeAnimation.gif";


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
            description = <DungeonsAndDragonsOverhaulTutorial />
        }
        return description;
    }

    return (
        <div>
            <div className='NavBarSectionPadding' />
            <h3 className="SectionHeader">
                Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon
                <hr className="HorizontalLineBlue" />
            </h3>
            <p />
            <Grid className="textAlignCenter" container direction="row" justifyContent="center" alignItems="center" >
                <Grid item xs={12}>
                    <img className="NewBannerImageLearnMore" src={SWWOverhaulBanner}
                        alt="Silverwind Workshop's Skill Trees - D&D Tabletop Game Addon Banner" />
                </Grid>
            </Grid>
            <p>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item xs={10}>
                        <ButtonGroup className='NavBarButtonGroup NewContentBody' fullWidth>
                            <Button className="ImageLogo" startIcon={<LocalGroceryStoreIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                                component="a" href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                                Store Page
                            </Button>
                            <Button className="ImageLogo" startIcon={<DownloadIcon style={{ marginRight: BUTTON_ICON_MARGIN_RIGHT }} />}
                                component="a" href={patchNotes} target="_blank" rel="noreferrer">
                                Download Patch Notes
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <div className="textAlignLeft animationFadeIn">
                    <br />
                    <div className='SectionCard'>
                        <p>
                            <b className='textColorBlue'>Contributions:</b>
                            <p>
                                <span className='ContributionsCardGameDesign'>Game Designer:</span> Designed gameplay and progression for 29 new skill trees that replace D&D classes and leveling progression, 65 new spells, 19 new weapons, 77 new crafting items, and 7 example characters with included backstory.
                                <br />
                                <br />
                                <span className='ContributionsCardArt'>Artist:</span> Drew 29 Skill Tree Icons and 1 adorable robot named H.E.L.P.E.R the Turotial Bot.
                                <br />
                                <br />
                                <span className='ContributionsCardQA'>Quality Assurance:</span> Tested system routinely with variety of players for 2 years straight during and after development lifecycle to find balance issues, bad player experience, and unintended interactions for correction.
                                <br />
                                <br />
                            </p>
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
                            <b id="Customer Review" className='textColorBlue'>
                                Customer Review:
                            </b>
                            <br />
                            <i>
                                “The customization of this system has honestly made it hard for me to go back to standard D&D.
                                It honestly impresses me the depth and creativity that is present in this.
                                If more flair and flexibility in combat is what you want, this is for you.”
                            </i>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="flex-start"
                            >
                                <Grid item xs={4}>
                                    <b>Rating: </b>
                                    <br />
                                    <Rating name="read-only" value={5} readOnly title='5/5 Stars' sx={{
                                        fontSize: "16px"
                                    }} />
                                </Grid>
                            </Grid>
                        </p>
                    </div>
                    <p>
                        <h4 id="Skill Tree Demos" className="SectionHeader">
                            Interactive Skill Tree Demonstration & Design Insights:
                            <hr className="HorizontalLineBlue" />
                        </h4>
                        <div className='SectionCard'>
                            <Grid container spacing={0} id="Row 3 Example Tree Icons Reworked">
                                <Grid item xs={3}>
                                    <img className='alignCenter50 cursorClickable imageMaxSize100' src={glowingEyeLogo}
                                        alt="Tutorial Icon"
                                        onClick={() => { setSelectedTree(4); document.getElementById('Skill Tree Demos').scrollIntoView() }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <img className='alignCenter50 cursorClickable imageMaxSize100' src={LeadershipIcon}
                                        alt="Leadership Icon"
                                        onClick={() => { setSelectedTree(1); document.getElementById('Skill Tree Demos').scrollIntoView() }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <img className='alignCenter50 cursorClickable imageMaxSize100' src={PyromancyIcon}
                                        alt="Leadership Icon"
                                        onClick={() => { setSelectedTree(2); document.getElementById('Skill Tree Demos').scrollIntoView() }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <img className='alignCenter50 cursorClickable imageMaxSize100' src={ShieldedCombatIcon}
                                        alt="Leadership Icon"
                                        onClick={() => { setSelectedTree(3); document.getElementById('Skill Tree Demos').scrollIntoView() }} />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <ButtonGroup variant='outlined' fullWidth className='NewContentBody'>
                                        <Button
                                            title='Tutorial' style={{
                                                paddingTop: "1vw",
                                                paddingBottom: "1vw"
                                            }}
                                            className='animationFadeIn50pcDelay'
                                            onClick={() => { setSelectedTree(4); document.getElementById('Skill Tree Demos').scrollIntoView() }} >
                                            Tutorial
                                        </Button>
                                        <Button
                                            title='Leadership Demonstration' style={{
                                                paddingTop: "1vw",
                                                paddingBottom: "1vw"
                                            }}
                                            className='animationFadeIn50pcDelay'
                                            onClick={() => { setSelectedTree(1); document.getElementById('Skill Tree Demos').scrollIntoView() }} >
                                            Leadership
                                        </Button>
                                        <Button
                                            title='Pyromancy Demonstration' style={{
                                                paddingTop: "1vw",
                                                paddingBottom: "1vw"
                                            }}
                                            className='animationFadeIn50pcDelay'
                                            onClick={() => { setSelectedTree(2); document.getElementById('Skill Tree Demos').scrollIntoView(); }} >
                                            Pyromancy
                                        </Button>
                                        <Button
                                            title='Shield Mastery Demonstration' style={{
                                                paddingTop: "1vw",
                                                paddingBottom: "1vw"
                                            }}
                                            className='animationFadeIn50pcDelay'
                                            onClick={() => { setSelectedTree(3); document.getElementById('Skill Tree Demos').scrollIntoView(); }} >
                                            Shield Mastery
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                            <p>
                                <hr className="HorizontalLineBlue" />
                                <div id="SelectedTreeDescription" className="NormalPageLayoutSlim">
                                    <h4 className="textAlignCenter animationcolorWhiteOrangeFlashing AbilityDescriptionSection">
                                        Select a Skill Tree Demo to see its Description and Design Insights.
                                    </h4>
                                    {!selectedTree >= 1 ?
                                        "" : <RenderTreeDescription slot={selectedTree} />}
                                </div>
                            </p>
                        </div>
                    </p>
                </div>
            </p >
        </div >
    );
}

export { DungeonsAndDragonsOverhaul };