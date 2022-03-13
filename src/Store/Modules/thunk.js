import axios from "axios"
import { toast } from "react-toastify"
import { addCart, deleteCart } from "./action"
import { produtos } from "../../db"
export const addBookThunk = (idBook) => {

    return (dispatch, getState) => {
        const { bookList } = getState()

        const response = produtos.find((value) => value.id === idBook)


        dispatch(addCart([...bookList, response]))
        toast.success("Item adicionado ao carrinho!")

    }

}

export const deleteBookThunk = (idBook) => {

    return (dispatch, getState) => {
        const { bookList } = getState()

        const newBookList = bookList.splice(bookList.findIndex((value) => value.id === idBook), 1)

        dispatch(deleteCart(bookList))
        toast.error("item removido !")
    }

}

export default addBookThunk


