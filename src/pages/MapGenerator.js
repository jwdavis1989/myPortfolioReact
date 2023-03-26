import { Button } from '@mui/material';
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
    var ArtList = MAP_GENERATOR_ART_LIST;
    return (
        <div className="MapGeneratorPage">
            <link rel="stylesheet" href="./map_generator.css" />
            <p className="HeaderTitle">
            TABLETOP RPG MAP GENERATOR
            </p>
            <div onLoad="">

                {/*<!-- Map Grid -->*/}
                <table width="100%" class="mapBorder">
                    <tbody>
                        <tr>
                            <div className="MapGeneratorSelectionInputs">
                                Interior Theme: <Select className="MapGeneratorSelectionInput" options={interiorThemes} id="theme" name="theme" />
                                Exterior Theme: <Select className="MapGeneratorSelectionInput" options={exteriorThemes} id="outside" name="outside" />
                                Size:           <Select className="MapGeneratorSelectionInput" options={mapSizes} id="size" name="size" />
                            </div>
                            <p /><Button variant='contained' className="commonButton">
                                Generate Map
                            </Button>
                        </tr>
                        <tr>
                            {/*<!-- This is the Beginning Of the Javascript-generated HTML-->*/}
                            <div id="mapGrid">
                                <img src={ArtList[0].image} alt=""></img>
                                <img src={ArtList[1].image} alt=""></img>
                                <img src={ArtList[2].image} alt=""></img>
                                <img src={ArtList[3].image} alt=""></img>
                            </div>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );
}

export { MapGenerator };