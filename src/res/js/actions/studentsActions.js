import axios from 'axios'
import {
    SET_ALERT,
    SET_LIST,
    RESET_ALERT
} from "../constants/action-types";

export function dispatchSetList(payload) {
    return { type: SET_LIST, payload };
}

export function dispatchSetAlert(payload) {
    return { type: SET_ALERT, payload };
}

export function resetAlert(payload) {
    return { type: RESET_ALERT };
}

export const addStudent = ({ name, email, photo, enrNb }) => (dispatch) => {
    dispatch(dispatchSetAlert('add'))
    axios
        .post('/addStudent', { name, email, photo, enrNb })
        .then(r => {
            getStudents()(dispatch);
        })
        .catch(err => console.log(err))
}

export const removeStudent = (id) => (dispatch) => {
    axios
        .delete('/deleteStudent/' + id)
        .then(r => {
            getStudents()(dispatch);
        })
        .catch(err => console.log(err))
}

export const getStudents = () => (dispatch) => {
    dispatch(dispatchSetAlert('search'))
    axios
        .get("/getAllStudents")
        .then(res => {
            dispatch(dispatchSetList(res.data))
            dispatch(resetAlert())
        })
        .catch(err => console.log(err))
}

export const markStudent = (id, presence) => (dispatch) => {
    axios
        .put('/addToPresent/' + id, { presence })
        .then(r => {
            getStudents()(dispatch);
        })
        .catch(err => console.log(err))
}




