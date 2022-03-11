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

    // receber o id do livro
    return (dispatch, getState) => {
        const { bookList } = getState()

        const newBookList = bookList.splice(bookList.findIndex((value) => value.id === idBook), 1)
        // const filterBook = bookList.filter((value, index) => index !== idBook)
        console.log(bookList)
        // dispatch(deleteCart(filterBook))
        dispatch(deleteCart(bookList))
        toast.error("item removido !")
    }

}

export default addBookThunk


//
/*

const array1 = [1,2,"macaco", {name:"macaco value"}]

const found = array1.findIndex((value)=>  value.name ==="macaco value")
const index = array1.indexOf(found)
// console.log(found)
// console.log(index)

const teste =array1.splice(array1.findIndex((value)=>  value.name ==="macaco value"),1)

console.log(array1)
console.log(teste)
*/