import { HIDE_ERR, SHOW_ERR } from "./types";


const initialState = {
    active: false
}

export default function errReducer(state = initialState, action) {

    switch (action.type) {
        case HIDE_ERR:
            return { ...state, active: false, text: null }
        case SHOW_ERR:
            return { ...state, active: true, text: action.payload }
        default: return state

    }

}