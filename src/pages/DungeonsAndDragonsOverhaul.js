import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

import { LeadershipTalentTreeComponent } from '../components/SWWOverhaul/LeadershipTalentTreeComponent';
import { ShieldedCombatTalentTreeComponent } from '../components/SWWOverhaul/ShieldedCombatTalentTreeComponent';
import { PyromancyTalentTreeComponent } from '../components/SWWOverhaul/PyromancyTalentTreeComponent';


import LeadershipIcon from '../resources/images/talentTreesImages/LeadershipIcon.png';
import ShieldedCombatIcon from '../resources/images/talentTreesImages/ShieldedCombatIcon.png';
import PyromancyIcon from '../resources/images/talentTreesImages/PyromancyIcon.png';
import OverviewIcon from '../resources/images/glowingEyeAnimation/glowingEye1.png';

function DungeonsAndDragonsOverhaul() {
    const [selectedTree, setSelectedTree] = useState(0);
    const imageLogoDefaultClasses = "ImageLogo animationPyromancyIconFadeIn";
    const imageLogoDefaultClassesNoAnimation = "ImageLogo";

    useEffect(() => {
        setSelectedTree(0);
    }, []);

    function resetSelectTreeHighlight() {
        document.getElementById("LeadershipTreeLogo").className = imageLogoDefaultClassesNoAnimation;
        document.getElementById("PyromancyLogo").className = imageLogoDefaultClassesNoAnimation;
        document.getElementById("ShieldedCombatLogo").className = imageLogoDefaultClassesNoAnimation;
    }

    function RenderTreeDescription(props) {
        let description = "";
        resetSelectTreeHighlight();
        if (props.slot === 1) {
            document.getElementById("LeadershipTreeLogo").className = "ImageLogoSelected";
            description = <LeadershipTalentTreeComponent />
        }
        else if (props.slot === 2) {
            document.getElementById("PyromancyLogo").className = "ImageLogoSelected";
            description = <PyromancyTalentTreeComponent />
        }
        if (props.slot === 3) {
            document.getElementById("ShieldedCombatLogo").className = "ImageLogoSelected";
            description = <ShieldedCombatTalentTreeComponent />
        }
        return description;
    }

    return (
        <div>
            <Grid container spacing={1} id="Row 1 Overview">
                <Grid item xs={1} />
                <Grid item xs={5}>
                    <p className="HeaderTitleWide">
                        OVERVIEW
                    </p>
                </Grid>
                <Grid item xs={5}>
                    <p className="HeaderTitleWide">
                        WHAT PROBLEMS DOES THIS SYSTEM SOLVE?
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={1} id="Row 2 Example Tree Header">
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <p className="HeaderTitleWide">
                        EXAMPLE TREES
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={0} id="Row 3 Example Tree Icons">
                <Grid item xs={1} />
                <Grid item xs={1}>
                    <p className="HeaderTitleWide">
                        EXAMPLE TREES
                    </p>
                    <p>
                        <img onClick={() => setSelectedTree(1)}
                            className={imageLogoDefaultClasses} src={LeadershipIcon}
                            id="LeadershipTreeLogo" alt="Leadership Icon"></img>
                        <div className="TreeNametag">
                            LEADERSHIP
                        </div>
                    </p>
                    <p>
                        <br />
                        <img onClick={() => setSelectedTree(2)}
                            className={imageLogoDefaultClasses} src={PyromancyIcon}
                            id="PyromancyLogo" alt="Pyromancy Icon"></img>
                        <div className="TreeNametag">
                            PYROMANCY
                        </div>
                    </p>
                    <p>
                        <br />
                        <img onClick={() => setSelectedTree(3)}
                            className={imageLogoDefaultClasses} src={ShieldedCombatIcon}
                            id="ShieldedCombatLogo" alt="Shielded Combat Icon"></img>
                        <div className="TreeNametag">
                            SHIELDED COMBAT
                        </div>
                    </p>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={7}>
                    <div id="SelectedTreeDescription" className="NormalPageLayoutLeft moveLeft15 width100">
                        {!selectedTree >= 1 ?
                            <h3 className="textFontPixel textAlignCenter">CHOOSE AN EXAMPLE TREE ICON TO SEE ITS DESCRIPTION
                            </h3> : <RenderTreeDescription slot={selectedTree} />}
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <p className="HeaderTitleWide">
                        OVERVIEW
                    </p>
                    <p>
                        <img onClick={() => setSelectedTree(1)}
                            className={imageLogoDefaultClasses} src={OverviewIcon}
                            id="LeadershipTreeLogo" alt="Leadership Icon"></img>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}

export { DungeonsAndDragonsOverhaul };