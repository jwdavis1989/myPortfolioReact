import { Button, ButtonGroup } from '@material-ui/core';
import Select from 'react-select';
import { MAP_GENERATOR_ART_LIST } from "../resources/constants/mapGeneratorImageEnum";

function MapGenerator() {
    const interiorThemes = [
        { label: "Stone", value: "stone" },
        { label: "Bluestone", value: "bluestone" }
    ];
    const exteriorThemes = [
        { label: "Cave", value: "../resources/images/map_generator/cave_background.jpg" },
        { label: "Forest", value: "../resources/images/map_generator/forest_background.jpg" },
        { label: "Swamp", value: "../resources/images/map_generator/swamp_grass_background.jpg" },
        { label: "Arid", value: "../resources/images/map_generator/dry_ground_background.jpg" },
        { label: "Desert", value: "../resources/images/map_generator/desert_background.jpg" },
        { label: "Ocean", value: "../resources/images/map_generator/ocean_background.jpg" },
        { label: "Steampunk", value: "../resources/images/map_generator/steampunk_background.jpg" },
        { label: "Lava", value: "../resources/images/map_generator/lava_background.gif" },
        { label: "Space", value: "../resources/images/map_generator/space_background.gif" }
    ];
    const mapSizes = [
        { label: "Very Small", value: 2 },
        { label: "Small", value: 3 },
        { label: "Medium", value: 4 },
        { label: "Large", value: 6 },
        { label: "Titanic", value: 8 },
        { label: "Why?", value: 16 }
    ];
    console.log(MAP_GENERATOR_ART_LIST);
    return (
        <div className="MapGeneratorPage">
            <link rel="stylesheet" href="./map_generator.css" />
            <p className="HeaderTitle">
                MAP GENERATOR
            </p>
            <div onLoad="">

                {/*<!-- Header -->*/}
                <div class="mapGenBanner" id="myHeader">
                    <h1>DnDone Map Generator</h1>
                </div>

                {/*<!-- Map Grid -->*/}
                <table width="100%" class="mapBorder">
                    <tbody>
                        <tr>
                            <div className="MapGeneratorSelectionInputs">
                                Interior Theme: <Select className="MapGeneratorSelectionInput" options={interiorThemes} id="theme" name="theme"/>
                                Exterior Theme: <Select className="MapGeneratorSelectionInput" options={exteriorThemes} id="outside" name="outside"/>
                                Size:           <Select className="MapGeneratorSelectionInput" options={mapSizes} id="size" name="size"/>
                            </div>
                            <p/><Button onClick={run()} variant='contained' className="commonButton">
                                Generate Map
                            </Button>
                        </tr>
                        <tr>
                            {/*<!-- This is the Beginning Of the Javascript-generated HTML-->*/}
                            <div id="mapGrid">
                            </div>
                            {/*<!-- This is the End Of the Javascript-generated HTML-->*/}
                        </tr>
                        <tr>
                            <br /><a href="./portfolio.html#Software Engineering Map Generator"><input type="button" value="Return to Portfolio" /></a>
                        </tr>
                    </tbody>
                </table>


                {/*<!-- Main Display Logic -->*/}
                {/* Old Script: <script src="../components/map_generator_resources/map_generator_script.js"></script>*/}
                
            </div>
        </div>
    );
}

export { MapGenerator };