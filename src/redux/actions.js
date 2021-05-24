import { DELETE_STUDENT, EDIT_STUDENT, FETCH_STUDENT, FETCH_STUDENT_SUCCESS, HIDE_ERR, SHOW_ERR } from "./types";


const url = `http://178.128.196.163:3000/api/records`;


export function studentsFetchDataSuccess(students) {
    return {
        type: FETCH_STUDENT_SUCCESS,
        payload: students
    }
}

export function studentsFetchData() {

    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(students => dispatch(studentsFetchDataSuccess(students)))
    }

}

export function addStudentAC(student) {
    return async dispatch => {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify({ data: student }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            dispatch(studentsFetchData())
        } catch (error) {
            dispatch(console.log(`Err :`, new Error(error)))
        }
    }
}

export function deleteStudentAC(id) {

    return async dispatch => {

        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })

        dispatch(studentsFetchData())
    }
}

export function editStudentAC(student, id) {

    return async dispatch => {
        await fetch(`${url}/${id}`, {
            method: 'POST',
            body: JSON.stringify({ data: { ...student, editable: true } }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch(studentsFetchData())
    }
}

export function saveStudentAC(newStudent, id) {

    return async dispatch => {

        await fetch(`${url}/${id}`, {
            method: 'POST',
            body: JSON.stringify({ data: newStudent }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch(studentsFetchData())
    }
}

// ##################################################################################

export function showErr(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ERR,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideErr())
        }, 3000)
    }
}

export function hideErr() {
    return {
        type: HIDE_ERR
    }
}


// setInterval(() => {
//     fetch('http://178.128.196.163:3000/api/records/')
//         .then(response => response.json())
//         .then(response =>
//             response.forEach(el => {
//                 fetch(`http://178.128.196.163:3000/api/records/${el._id}`, {
//                     method: 'DELETE'
//                 })
//             })
//         )

// }, 3000)


// fetch('http://178.128.196.163:3000/api/records/')
//     .then(response => response.json())
//     .then(response =>
//         response.forEach(el => {
//             fetch(`http://178.128.196.163:3000/api/records/${el._id}`, {
//                 method: 'DELETE'
//             })
//         })
//     )
