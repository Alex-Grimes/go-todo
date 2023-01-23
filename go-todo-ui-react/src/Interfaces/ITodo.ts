import { array } from "prop-types"

export interface ITodo 
    
    {
        Completed: boolean,
        Description: string,
        Id: number
    }

    export interface ITodos extends Array<ITodo>{}
