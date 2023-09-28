import { ADD_FAV, REMOVE_FAV } from "./action-types";


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return { 
                ...state, myFavorites: payload, allCharacters: payload 
            };

        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: payload,
                allCharacters: payload 
            }

        default:
            return {...state}
    }
}

export default reducer;
