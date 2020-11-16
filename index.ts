import type {Maze} from './maze'
import {Coords, walk} from './maze'
import {showPath} from "./utils";

const X = false; // wall
const _ = true; // pass

const maze: Maze = [
    [X,X,X,X,_,X,X,X,X],
    [X,_,X,_,_,X,_,_,X],
    [X,_,X,X,_,X,_,X,X],
    [_,_,X,_,_,_,_,X,_],
    [X,_,X,_,X,_,X,X,X],
    [X,_,_,_,X,_,_,_,X],
    [X,X,X,X,X,X,X,X,X],
];
const start: Coords = {x: 4, y:0}

let walkPath = walk(maze, start)

showPath(walkPath, maze)



