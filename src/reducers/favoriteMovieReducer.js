const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {  
        case(TOGGLE_FAVORITES): {
            return {
                ...state,
                    displayFavorites: !state.displayFavorites
            }
        }
        case(ADD_FAVORITES): {
            return {
                ...state,
                    favorites: [...state.favorites, action.payload]
            }
        }
        case (REMOVE_FAVORITES): {
            return {
                ...state,
                    favorites: state.filter(item=>(item.id !==action.payload))
            }
        }
        default:
            return state;
    }
}

export default reducer;