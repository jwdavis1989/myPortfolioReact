//Initialize Grid Chunk
var Cell3Layer = 
{
  floorImage: "none",
  wallImage: "none",
  gridImage: "../resources/images/map_generator/grid_template_512_8_8_0.png",
  theme: "none",
  left: 0,
  right: 0,
  up: 0,
  down: 0,
  hallway: 0,
  x: 0,
  y: 0,
  inside: 0
};

//Map Object, comprised of width * height number of cell objects.
var map =
{
  //In Cells
  width: 4,
  height: 4,
  size: 4,
  pathLength: 9,
  theme: "none",
  chunks: [],
  //Background is set based on a dropdown
  outside: "none",
  setArtData: function()
  {

    //Sort ArtData into a smaller list containing only the correct theme and walls
    //Temporary Container for the sorted art metadata
    var tempList = [];

    //Iterate through art metadata for all correctly themed art and unthemed walls
    for (var k = 0;k < artList.length;k++)
    {
      if (artList[k].theme == this.theme || !artList[k].floor)
      {
        tempList.push(artList[k]);
      }
    }

    //For Each Column
    for (var i = 0; i < this.width;i++)
    {
      //For Each Row
      for (var j = 0; j < this.height;j++)
      {
        //Search for and Set Floor Art and Wall Art
        for (var l = 0;l < tempList.length;l++)
        {
          if (tempList[l].left == this.chunks[i][j].left && tempList[l].right == this.chunks[i][j].right && tempList[l].up == this.chunks[i][j].up && tempList[l].down == this.chunks[i][j].down && this.chunks[i][j].hallway == tempList[l].hallway)
          {
            if (tempList[l].floor)
            {
              this.chunks[i][j].floorImage = tempList[l].image;
            }
            else
            {
              this.chunks[i][j].wallImage = tempList[l].image;
            }
          }
        }
      }
    }
  },
  setData: function()
  {
    this.theme = document.getElementById("theme").value;
    console.log("Inside Theme: " + this.theme);

    this.outside = document.getElementById("outside").value;
    console.log("Outside Theme: " + this.outside);

    this.size = document.getElementById("size").value;
    console.log("Size: " + this.size);

    this.width = this.size;
    this.height = this.size;

    this.pathLength = Math.pow(this.size, 2)/2;
    console.log("Critical Path Length: " + this.pathLength);

    this.initChunksArray();
  },
  render: function ()
  {
    //Determine appropriate art for each chunk in the map
    console.log('Rendering Beginning . . .');
    this.setArtData();
    console.log('Art Data Set');

    //Create Temporary Variables to resize Grid appropriately
    var table_width = 30;
    var chunk_width = 0.3 * (screen.width/this.width);
    console.log(`Chunk Width: ${chunk_width}`);

    //Create Temp String that will contain everything, initialize it to nonlooping beginning of html
    var tempHTML = `<!-- This is the Beginning Of the Javascript-generated HTML-->
    <style>
    .mapTable {
      margin-left:auto; 
      margin-right:auto;
      border-spacing: 0;
      border-collapse: collapse;
      width:${table_width}%;
    }
    
    .mapTable tr, .mapTable td {
      border: none;
      padding: 0px;
      vertical-align: top;
      position: relative;
      width: ${chunk_width}px;
      height: ${chunk_width}px; 
    }
    </style>
    <table class="mapTable" background='${this.outside}'> 
        <tbody>`;
    //For Each Row
    for (var i = 0; i < this.height;i++)
    {
      tempHTML += `<tr>`;
      //For Each Cell in a Row
      for (var j = 0;j < this.width;j++)
      {
          //For Each Cell in a Row
          tempHTML += `<td>`;

          //If the Cell contains a room
          if (this.chunks[j][i].inside)
          {
            //Draw the Floor
            tempHTML += `<img src="${this.chunks[j][i].floorImage}">`;

            //Draw the Walls
            tempHTML += `<img src="${this.chunks[j][i].wallImage}">`;
          }

          //Draw the Grid
          tempHTML += `<img src="${this.chunks[j][i].gridImage}">`;
          tempHTML += `</td>`;
      }
      tempHTML += `</tr>`;
    }

    tempHTML += `</tbody>

    </table>
    </div>
    <!-- This is the End Of the Javascript-generated HTML-->`;

    document.getElementById("mapGrid").innerHTML = tempHTML;
    console.log('Rendering Complete.');
    console.log(this.chunks);

  },
  generateMap: function()
  {
    console.log('Generating Map . . . ');

    //1. Calculate Critical Path
      //Store current length of critical path
      var tempPathLength = 1;

      //Pick an Entrance from an outside cell, possibly only the top row
      var randIndex = Math.floor(Math.random() * map.width);
      var entrance = this.chunks[randIndex][0];

      //Set entrance room's inside flag to true
      entrance.inside = 1;
      entrance.up = 1;
      console.log("Entrance: " + entrance.x + ", " + entrance.y);

      //Update Entrance Cell
      this.chunks[randIndex][0] = entrance;


      //Critical Path Iterator
      var currentChunk = entrance;
      
      //Iterate over the Critical Path until it is completed
      while (tempPathLength < this.pathLength)
      {
        //Random Roll whether the currentChunk is a hallway, unless it's the end of the crit path
        var hallwayRoll = Math.floor(Math.random() * 2);
        this.chunks[currentChunk.x][currentChunk.y].hallway = hallwayRoll;

        //Create temp array that stores all considered rooms
        var chunksConsidered = [];

        //Check all adjacent rooms, if their inside flag is false, push to temp list

        //Check Right
        if (this.chunks[currentChunk.x][currentChunk.y].x + 1 < this.width)
        {
          var neighbor = this.chunks[currentChunk.x + 1][currentChunk.y];
          if (!neighbor.inside)
          {
            //Random Roll if neighbor will be an optional room at minmimum
            randIndex = Math.floor(Math.random() * 2);
            //if (randIndex)
            {
              neighbor.left = 1;
              currentChunk.right = 1;
              neighbor.inside = 1;
            }
            chunksConsidered.push(neighbor);
            console.log(` 
                        Right Neighbor: ${neighbor.x}, ${neighbor.y} Left:   ${neighbor.left}
                        Right Neighbor: ${neighbor.x}, ${neighbor.y} Right:  ${neighbor.right}
                        Right Neighbor: ${neighbor.x}, ${neighbor.y} Up:     ${neighbor.up}
                        Right Neighbor: ${neighbor.x}, ${neighbor.y} Down:   ${neighbor.down}`);
          }
        }

        //Check Left
        if (this.chunks[currentChunk.x][currentChunk.y].x - 1 >= 0)
        {
          var neighbor = this.chunks[currentChunk.x - 1][currentChunk.y];
          if (!neighbor.inside)
          {
            //Random Roll if neighbor will be an optional room at minmimum
            randIndex = Math.floor(Math.random() * 2);
            //if (randIndex)
            {
              neighbor.right = 1;
              currentChunk.left = 1;
              neighbor.inside = 1;
            }
            chunksConsidered.push(neighbor);
            console.log(` 
                        Left Neighbor: ${neighbor.x}, ${neighbor.y} Left:   ${neighbor.left}
                        Left Neighbor: ${neighbor.x}, ${neighbor.y} Right:  ${neighbor.right}
                        Left Neighbor: ${neighbor.x}, ${neighbor.y} Up:     ${neighbor.up}
                        Left Neighbor: ${neighbor.x}, ${neighbor.y} Down:   ${neighbor.down}`);
          }
        }

        //Check Up
        if (this.chunks[currentChunk.x][currentChunk.y].y - 1 >= 0)
        {
          var neighbor = this.chunks[currentChunk.x][currentChunk.y - 1];
          if (!neighbor.inside)
          {
            //Random Roll if neighbor will be an optional room at minmimum
            randIndex = Math.floor(Math.random() * 2);
            //if (randIndex)
            {
              neighbor.down = 1;
              currentChunk.up = 1;
              neighbor.inside = 1;
            }
            chunksConsidered.push(neighbor);
            console.log(` 
                        Up Neighbor: ${neighbor.x}, ${neighbor.y} Left:   ${neighbor.left}
                        Up Neighbor: ${neighbor.x}, ${neighbor.y} Right:  ${neighbor.right}
                        Up Neighbor: ${neighbor.x}, ${neighbor.y} Up:     ${neighbor.up}
                        Up Neighbor: ${neighbor.x}, ${neighbor.y} Down:   ${neighbor.down}`);
          }
        }

        //Check Down
        if (this.chunks[currentChunk.x][currentChunk.y].y + 1 < this.height)
        {
          var neighbor = this.chunks[currentChunk.x][currentChunk.y + 1];
          if (!neighbor.inside)
          {
            //Random Roll if neighbor will be an optional room at minmimum
            randIndex = Math.floor(Math.random() * 2);
            //if (randIndex)
            {
              neighbor.up = 1;
              currentChunk.down = 1;
              neighbor.inside = 1;
            }
            chunksConsidered.push(neighbor);
            console.log(` 
                        Down Neighbor: ${neighbor.x}, ${neighbor.y} Left:   ${neighbor.left}
                        Down Neighbor: ${neighbor.x}, ${neighbor.y} Right:  ${neighbor.right}
                        Down Neighbor: ${neighbor.x}, ${neighbor.y} Up:     ${neighbor.up}
                        Down Neighbor: ${neighbor.x}, ${neighbor.y} Down:   ${neighbor.down}`);
          }
        }

        //Random Roll Adjacent Cells to see if they are part of the critical path too
        if (chunksConsidered.length > 0)
        {
          //Random Roll Neighbors

          var tempRandIndex = Math.floor(Math.random() * chunksConsidered.length);

          //Copy over Door Values
          this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].right = chunksConsidered[tempRandIndex].right;
          this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].left = chunksConsidered[tempRandIndex].left;
          this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].up = chunksConsidered[tempRandIndex].up;
          this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].down = chunksConsidered[tempRandIndex].down;

          var tempChunk = this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y];

          console.log(` 
                        Winner Neighbor: ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].x}, ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].y} Left:   ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].left}
                        Winner Neighbor: ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].x}, ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].y} Right:  ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].right}
                        Winner Neighbor: ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].x}, ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].y} Up:     ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].up}
                        Winner Neighbor: ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].x}, ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].y} Down:   ${this.chunks[chunksConsidered[tempRandIndex].x][chunksConsidered[tempRandIndex].y].down}`);
          console.log(`New Room: ${tempChunk.x}, ${tempChunk.y}`);
        

          //Set current room's inside flag to true
          tempChunk.inside = 1;

          //Update New Chunk
          this.chunks[tempChunk.x][tempChunk.y] = tempChunk;


         

          //Add door to previous cell
          if (tempChunk.left)
          {
            currentChunk.right = 1;
          }
          if (tempChunk.right)
          {
            currentChunk.left = 1;
          }
          if (tempChunk.up)
          {
            currentChunk.down = 1;
          }
          if (tempChunk.down)
          {
            currentChunk.up = 1;
          }

          console.log(` 
                        New Room: ${tempChunk.x}, ${tempChunk.y} Left:   ${tempChunk.left}
                        New Room: ${tempChunk.x}, ${tempChunk.y} Right:  ${tempChunk.right}
                        New Room: ${tempChunk.x}, ${tempChunk.y} Up:     ${tempChunk.up}
                        New Room: ${tempChunk.x}, ${tempChunk.y} Down:   ${tempChunk.down}`);
        
        
          //Update Previous Cell Changes
          this.chunks[currentChunk.x][currentChunk.y] = currentChunk;

          //Iterate to Next Chunk
          currentChunk = this.chunks[tempChunk.x][tempChunk.y];


          tempPathLength++;
        }
        else
        {
          console.log(`No Further Path Possible`);
          tempPathLength = this.pathLength;
          this.chunks[currentChunk.x][currentChunk.y].hallway = 0;
        }
      } //End of While
    
    //2. Generate Optional Rooms
        for (var i=0;i<this.width;i++)
        {
          for (var j=0;j<this.height;j++)
          {
            if (this.chunks[i][j].optional && !this.chunks[i][j].critical)
            {
              this.chunks[i][j].inside = 1;
            }
          }
        }

    //3. Render Map Layers
    this.render();

  },
  initChunksArray: function()
  {
    //Set the Width of the Array
    this.chunks = new Array(this.width);

    //Loop to create 2D array using 1D array 
    for (var i = 0; i < this.width; i++) 
    { 
        this.chunks[i] = new Array(this.height);
    } 
  
    //Shallow Clone Cell3Layers into each grid spot.
    for (var i = 0; i < this.width;i++)
    {
      for (var j = 0; j < this.height; j++)
      {
        //Shallow-Clone Jutsu
        this.chunks[i][j] = {};
        Object.assign(this.chunks[i][j], Cell3Layer);
        this.chunks[i][j].x = i;
        this.chunks[i][j].y = j;
      }
    }
  }
}

console.log("MGScript Loaded");
function run()
{
  map.setData();
  map.generateMap();
}

//Container for metadata of images
let artList = 
[
  //Stone Hallway Floors
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_0.png",
    theme: "stone",
    left: 1,
    right: 0,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_right_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_up_0.png",
    theme: "stone",
    left: 0,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_down_0.png",
    theme: "stone",
    left: 0,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_down_0.png",
    theme: "stone",
    left: 1,
    right: 0,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_right_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 0,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_right_down_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_right_up_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_right_up_down_0.png",
    theme: "stone",
    left: 1,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_up_0.png",
    theme: "stone",
    left: 1,
    right: 0,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_left_up_down_0.png",
    theme: "stone",
    left: 1,
    right: 0,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_right_down_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 0,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_right_up_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 1,
    down: 0,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_right_up_down_0.png",
    theme: "stone",
    left: 0,
    right: 1,
    up: 1,
    down: 1,
    floor: 1,
    hallway: 1
  },
  {
    image: "../resources/images/map_generator/hallway_floor_stone_up_down_0.png",
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
    image: "../resources/images/map_generator/square_floor_stone_0.png",
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