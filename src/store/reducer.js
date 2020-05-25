import * as actions from "./actions";


const initialState = {
    materials:  {
        pomadebarhat: 1,
        pomadebrown: 1,
        pomadedarkred: 1,
        pomadered: 1,
        pomadeviolet: 1,
      },
    price: 100,
};
const PRICES = {
    pomadebarhat: 10,
    pomadebrown: 10,
    pomadedarkred: 10,
    pomadered: 10,
    pomadeviolet: 10,
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_MATERIAL:
            
            return {
                ...state,
                materials: {
                  ...state.materials,
                  [action.material]: state.materials[action.material] + 1,
                },
                price: state.price + PRICES[action.material],
              };
        case actions.REMOVE_MATERIAL:
            
            return {
                ...state,
                materials: {
                  ...state.materials,
                  [action.material]: state.materials[action.material] - 1,
                },
                price: state.price - PRICES[action.material],
              };
    
        default:
            return state;
    }
    
};