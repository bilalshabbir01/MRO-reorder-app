import { GET_ALL_DATA } from "../action/types";

const initialState = {
    allData:[]
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DATA:
            return { ...state, allData: action.result}
  
        

    }
    return state;
}

export default authReducer