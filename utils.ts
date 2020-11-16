import {Coords, Maze} from "./maze";

export function showPath(path: Coords[], maze: Maze) {
    for(let i = 0; i < maze.length; i++){
        let symbolicRow = []
        for(let j = 0; j < maze[0].length; j++){
            let cellInPath = path.filter(cell => cell.x === j && cell.y === i)
            if(cellInPath.length === 1){
                symbolicRow.push("*")
            }else if(maze[i][j]){
                symbolicRow.push("_")
            }else{
                symbolicRow.push("■")
            }
        }
        console.log(symbolicRow.join(" "))
    }
}