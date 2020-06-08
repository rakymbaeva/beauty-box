import * as types from "../actions/types";


const initialState = {
    materials: null,
    price: 100,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_MATERIAL:
            
            return {
                ...state,
                materials: {
                  ...state.materials,
                  [action.material]: {
                    ...state.materials[action.material],
                    quantity: state.materials[action.material].quantity + 1,
                  },
                },
                price: state.price + state.materials[action.material].price,
              };
        case types.REMOVE_MATERIAL:
            
            return {
                ...state,
                materials: {
                  ...state.materials,
                  [action.material]: {
                    ...state.materials[action.material],
                    quantity: state.materials[action.material].quantity - 1,
                  },
                },
                price: state.price - state.materials[action.material].price,
              };
              case types.SET_MATERIALS:
                return {
                  ...state,
                  materials: action.materials,
                  price: initialState.price
                };
    
        default:
            return state;
    }
    
};