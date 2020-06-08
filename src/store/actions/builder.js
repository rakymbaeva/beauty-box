import axios from "../../axios"
import { ADD_MATERIAL, REMOVE_MATERIAL, SET_MATERIALS } from "./types";

export const add = (dispatch, material) => dispatch({
  type: ADD_MATERIAL, material
});

export const remove = (dispatch, material) => dispatch({
  type: REMOVE_MATERIAL, material
});


export const set = (dispatch, materials) => dispatch({
    type: SET_MATERIALS, materials
  });
  
  export const load = (dispatch) => axios
    .get("/materials.json")
    .then(({ data }) => set(dispatch, data))
    .catch(() => {});