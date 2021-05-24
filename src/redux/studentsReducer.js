import { DELETE_STUDENT, EDIT_STUDENT, FETCH_STUDENT_SUCCESS } from "./types"


export const students = (state = [], action) => {
    switch (action.type) {

        case FETCH_STUDENT_SUCCESS:

            return action.payload

        default: return state
    }
}


        // case DELETE_STUDENT:
        //     // let filteredArr = action.payload.filter(comment => comment.id !== action.deletedComment_id)
        //     // return { ...state, comments: [...state.comments = filteredArr] }
        //     return state