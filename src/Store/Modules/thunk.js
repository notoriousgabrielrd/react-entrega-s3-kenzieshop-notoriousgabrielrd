import axios from "axios"
import { toast } from "react-toastify"
import { addCart, deleteCart } from "./action"

export const addBookThunk = (idBook) => {

    return (dispatch, getState) => {
        const { bookList } = getState()

        axios.get(`http://localhost:3000/products/${idBook}`)
            .then((response) => dispatch(addCart([...bookList, response.data])))


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


