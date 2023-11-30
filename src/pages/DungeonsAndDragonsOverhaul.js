import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { LeadershipTalentTreeComponent } from '../components/SWWOverhaul/LeadershipTalentTreeComponent';
import { ShieldedCombatTalentTreeComponent } from '../components/SWWOverhaul/ShieldedCombatTalentTreeComponent';
import { PyromancyTalentTreeComponent } from '../components/SWWOverhaul/PyromancyTalentTreeComponent';
import { OverhaulOverviewComponent } from '../components/SWWOverhaul/OverhaulOverviewComponent';
import { DungeonsAndDragonsOverhaulOverview } from '../components/DungeonsAndDragonsOverhaulOverview';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import patchNotes from "../resources/handouts/Silverwind_Workshop_Skill_Tree_Change_Logs.rtf";
import DownloadIcon from '@mui/icons-material/Download';


import LeadershipIcon from '../resources/images/talentTreesImages/LeadershipIcon.png';
import ShieldedCombatIcon from '../resources/images/talentTreesImages/ShieldedCombatIcon.png';
import PyromancyIcon from '../resources/images/talentTreesImages/PyromancyIcon.png';
import OverviewIcon from '../resources/images/glowingEyeAnimation/glowingEyeAnimation.gif';

function DungeonsAndDragonsOverhaul() {
    const [selectedTree, setSelectedTree] = useState(0);
    const imageLogoDefaultClassesLeadership = "OverhaulImageLogo animationLeadershipIconFadeIn";
    const imageLogoDefaultClassesPyromancy = "OverhaulImageLogo animationPyromancyIconFadeIn";
    const imageLogoDefaultClassesShieldedCombat = "OverhaulImageLogo animationShieldedCombatIconFadeIn";
    const imageLogoDefaultClassesNoAnimation = "OverhaulImageLogo";

    useEffect(() => {
        setSelectedTree(4);
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
            <Grid container spacing={1} id="Row 2 Example Tree Header">
            <Grid item xs={0.5} />
                <Grid item xs={11}>
                    <p className="HeaderTitleWide">
                        D&D SKILL TREES & LEVELING OVERHAUL DESIGN INSIGHTS & EXAMPLES
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={-10} id="Row 3 Example Tree Icons">
            <Grid item xs={0.5} />
                <Grid item xs={1}>
                    <p className="HeaderTitleWide">
                        OVERVIEW
                    </p>
                    <p>
                        <img onClick={() => setSelectedTree(4)}
                            className={imageLogoDefaultClassesLeadership} src={OverviewIcon}
                            id="OverviewLogo" alt="Overview Icon">
                        </img>
                    </p>
                    <p className="HeaderTitleWide">
                        DEMO TREES
                    </p>
                    <div onClick={() => setSelectedTree(1)} width='100%'>
                        <img
                            className={imageLogoDefaultClassesLeadership} src={LeadershipIcon}
                            id="LeadershipTreeLogo" alt="Leadership Icon">
                        </img>
                    </div>
                    <div onClick={() => setSelectedTree(2)}>
                        <img
                            className={imageLogoDefaultClassesPyromancy} src={PyromancyIcon}
                            id="PyromancyLogo" alt="Pyromancy Icon">
                        </img>
                    </div>
                    <div onClick={() => setSelectedTree(3)}>
                        <img
                            className={imageLogoDefaultClassesShieldedCombat} src={ShieldedCombatIcon}
                            id="ShieldedCombatLogo" alt="Shielded Combat Icon">
                        </img>
                    </div>
                </Grid>
                <Grid item xs={1.5}>
                <p className="HeaderTitle">
                        <a href="https://marketplace.roll20.net/browse/gameaddon/14629/silverwind-workshops-skill-trees-and-leveling-overhaul" target="_blank" rel="noreferrer">
                            <LocalGroceryStoreIcon fontSize='inherit' /> Store Page
                        </a>
                    </p>
                    <p className="HeaderTitle">
                        <a href={patchNotes} target="_blank" rel="noreferrer">
                            <DownloadIcon fontSize='inherit' /> Patch Notes
                        </a>
                    </p>
                </Grid>
                <Grid item xs={9}>
                    <div id="SelectedTreeDescription" className="NormalPageLayoutLeft width100">
                        {!selectedTree >= 1 ?
                            <span>
                                <DungeonsAndDragonsOverhaulOverview />
                                <br /><br />
                                <h3 className="textAlignCenter">CLICK FAQ OR AN EXAMPLE TREE ICON TO SEE ITS DESCRIPTION
                                </h3>
                            </span> : <RenderTreeDescription slot={selectedTree} />}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { DungeonsAndDragonsOverhaul };