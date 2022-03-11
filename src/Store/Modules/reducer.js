import { ADD_BOOK, DEL_BOOK } from "./actionTypes";

const initialState = []

const bookReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_BOOK:
            // return [...state, action.book]
            console.log("aqui", action.book)

            return action.book
        case DEL_BOOK:
            console.log(action.book)
            return action.book
        default:
            return state

    }
}


export default bookReducer