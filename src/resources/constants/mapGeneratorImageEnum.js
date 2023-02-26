import hallway_floor_stone_left from "../images/map_generator/hallway_floor_stone_left_0.png";
import hallway_floor_stone_right from "../images/map_generator/hallway_floor_stone_right_0.png";
import hallway_floor_stone_up from "../images/map_generator/hallway_floor_stone_up_0.png";
import hallway_floor_stone_down from "../images/map_generator/hallway_floor_stone_down_0.png";

import hallway_floor_stone_left_down from "../images/map_generator/hallway_floor_stone_left_down_0.png";
import hallway_floor_stone_left_right from "../images/map_generator/hallway_floor_stone_left_right_0.png";
import hallway_floor_stone_left_right_down from "../images/map_generator/hallway_floor_stone_left_right_down_0.png";
import hallway_floor_stone_left_right_up from "../images/map_generator/hallway_floor_stone_left_right_up_0.png";

import hallway_floor_stone_left_right_up_down from "../images/map_generator/hallway_floor_stone_left_right_up_down_0.png";
import hallway_floor_stone_left_up from "../images/map_generator/hallway_floor_stone_left_up_0.png";
import hallway_floor_stone_left_up_down from "../images/map_generator/hallway_floor_stone_left_up_down_0.png";
import hallway_floor_stone_right_down from "../images/map_generator/hallway_floor_stone_right_down_0.png";

import hallway_floor_stone_right_up from "../images/map_generator/hallway_floor_stone_right_up_0.png";
import hallway_floor_stone_right_up_down from "../images/map_generator/hallway_floor_stone_right_up_down_0.png";
import hallway_floor_stone_up_down from "../images/map_generator/hallway_floor_stone_up_down_0.png";
import square_floor_stone from "../images/map_generator/square_floor_stone_0.png";


//Container for metadata of images
const MAP_GENERATOR_ART_LIST = 
[
  //Stone Hallway Floors
  {
    image: hallway_floor_stone_left,
    theme: "stone",
    left: 1,
    right: 0,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_right,
    theme: "stone",
    left: 0,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_up,
    theme: "stone",
    left: 0,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_down,
    theme: "stone",
    left: 0,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_left_down,
    theme: "stone",
    left: 1,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_left_right,
    theme: "stone",
    left: 1,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_left_right_down,
    theme: "stone",
    left: 1,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_left_right_up,
    theme: "stone",
    left: 1,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_left_right_up_down,
    theme: "stone",
    left: 1,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_left_up,
    theme: "stone",
    left: 1,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_left_up_down,
    theme: "stone",
    left: 1,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_right_down,
    theme: "stone",
    left: 0,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_right_up,
    theme: "stone",
    left: 0,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_right_up_down,
    theme: "stone",
    left: 0,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: hallway_floor_stone_up_down,
    theme: "stone",
    left: 0,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },

  //Stone Room Floors
  {
    //left
    image: square_floor_stone,
    theme: "stone",
    left: 1,
    right: 0,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //right
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //up
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 0,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 0,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 1,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left right
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //left right down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left right up
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //left right up down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left up
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 1,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //left up down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 1,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //right down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //right up
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //right up down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //up down
    image: "../resources/images/map_generator/square_floor_stone_0.png",
    theme: "stone",
    left: 0,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },
  
  //Bluestone Hallway Floors
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_right_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_up_0.png",
    theme: "bluestone",
    left: 0,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_down_0.png",
    theme: "bluestone",
    left: 0,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_down_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_right_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_right_down_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_right_up_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_right_up_down_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_up_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_left_up_down_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_right_down_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_right_up_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_right_up_down_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_bluestone_up_down_0.png",
    theme: "bluestone",
    left: 0,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  //Bluestone Room Floors
  {
    //left down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //right
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //up
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 0,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 0,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left right
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //left right down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left right up
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //left right up down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //left up
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //left up down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 1,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //right down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //right up
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 0
  },
  {
    //right up down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 0,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },
  {
    //up down
    image: "../resources/images/map_generator/square_floor_bluestone_0.png",
    theme: "bluestone",
    left: 0,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 0
  },

  //Hallway Walls
  {
    image: "../resources/images/map_generator/hallway_left_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 0,
    down: 0,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_right_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 0,
    down: 0,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_up_0.png",
    theme: "none",
    left: 0,
    right: 0,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_down_0.png",
    theme: "none",
    left: 0,
    right: 0,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_left_down_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_left_right_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 0,
    down: 0,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_left_right_down_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_left_right_up_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_left_right_up_down_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_left_up_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_left_up_down_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_right_down_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_right_up_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_right_up_down_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_up_down_0.png",
    theme: "none",
    left: 0,
    right: 0,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 1
  },

  //Room Walls
  {
    image: "../resources/images/map_generator/square_left_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 0,
    down: 0,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_down_0.png",
    theme: "none",
    left: 0,
    right: 0,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_left_right_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 0,
    down: 0,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_left_down_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_left_right_down_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_left_right_up_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_left_right_up_down_0.png",
    theme: "none",
    left: 1,
    right: 1,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_left_up_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_left_up_down_0.png",
    theme: "none",
    left: 1,
    right: 0,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_right_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 0,
    down: 0,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_right_down_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 0,
    down: 1,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_right_up_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_right_up_down_0.png",
    theme: "none",
    left: 0,
    right: 1,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_up_0.png",
    theme: "none",
    left: 0,
    right: 0,
    up: 1,
    down: 0,
    floor: 0,
    hallway: 0
  },
  {
    image: "../resources/images/map_generator/square_up_down_0.png",
    theme: "none",
    left: 0,
    right: 0,
    up: 1,
    down: 1,
    floor: 0,
    hallway: 0
  }
];

export { MAP_GENERATOR_ART_LIST };