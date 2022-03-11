

import { ADD_BOOK } from "./actionTypes";
import { DEL_BOOK } from "./actionTypes";

export const addCart = (book) => ({
    type: ADD_BOOK,
    book,

})

export const deleteCart = (book) => ({
    type: DEL_BOOK,
    book,
})