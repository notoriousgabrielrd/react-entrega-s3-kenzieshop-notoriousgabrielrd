import { ADD_BOOK, DEL_BOOK } from "./actionTypes";

const initialState = []

const bookReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_BOOK:
            return action.book
        case DEL_BOOK:
            return action.book
        default:
            return state
    }
}


export default bookReducer