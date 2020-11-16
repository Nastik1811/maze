export interface Coords {
    x: number;
    y: number;
}
export type Maze = boolean[][];

export function walk(maze: Maze, start: Coords): Coords[] {
    const n = maze.length;
    const m = maze[0].length;

    let path: Coords[] = [start];

    //Lets mark cells we will not add to the path i.e:
    //1. All walls
    //2. Cells we've already visited

    //Firstly, we create an inverted copy of an original maze that represents whether a cell is marked or not
    let markedMaze = maze.map(row => {
        return row.map(isWalkable => !isWalkable)
    })
    markedMaze[start.y][start.x] = true

    //Then we look for the next cell to add to the path
    let current;
    if(start.x === 0){
        current = {x: 1, y: start.y};
    }
    else if(start.x === m - 1){
        current = {x: m - 2, y: start.y};
    }
    else if(start.y === 0){
        current = {x: start.x, y: 1};
    }
    else if (start.y === n - 1){
        current = {x: start.x, y: n - 2};
    }
    else {
        return null
    }
    path.push(current)

    //Then if the current cell is not edge we mark it and look for an unmarked neighbour
    while(!isEdge(current, maze)){
        markedMaze[current.y][current.x] = true
        let unmarkedNeighbour = findUnmarkedNeighbour(current, markedMaze)

        //If cell don't have any unmarked neighbour it means it is a dead-end so we remove it from the path
        unmarkedNeighbour ? path.push(unmarkedNeighbour) : path.pop()
        //Now the current cell is the last added cell in the pass
        current = path[path.length - 1]
    }
    return path
}

function isEdge(cell: Coords, maze: Maze): boolean {
    return (cell.x === 0) || (cell.y === 0) || (cell.x === maze[0].length - 1) || (cell.y === maze.length - 1)
}

function findUnmarkedNeighbour(cell, markedMaze): Coords | null{
    const neighbours: Coords[] = [
        {x: cell.x + 1, y: cell.y},
        {x: cell.x, y: cell.y + 1},
        {x: cell.x - 1, y: cell.y},
        {x: cell.x, y: cell.y - 1}
    ]

    for (let coords of neighbours) {
        if(markedMaze[coords.y][coords.x] === false){
            return coords
        }
    }
    return null
}