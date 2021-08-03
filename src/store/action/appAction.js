import { GET_ALL_DATA } from "./types";



export const getAllData = (result) => (
    {
        type: GET_ALL_DATA,
        result

    }
)