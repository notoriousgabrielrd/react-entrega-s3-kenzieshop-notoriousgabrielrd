import Card from "../Card/index";
import api from "../../Service/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Header, CardItens } from "./style";
import "./style.css";
import { useSelector } from "react-redux";
import Button from "../Button";
import { toast } from "react-toastify";
import { produtos } from "../../db";

const Display = () => {
  const [bdBooks, setBdBooks] = useState([]);
  const history = useHistory();
  const books = useSelector((store) => store.bookList);
  console.log(books);
  useEffect(() => {
    function getBooks() {
      const data = produtos.map((value) => ({
        ...value,
      }));
      setBdBooks(data);
      toast.success("Escolha seus produtos !");
    }
    getBooks();
  }, []);
  return (
    <Container>
      <Header>
        <h2>Kenzie Shop</h2>
        <div className="div-login-cart">
          <button onClick={() => history.push("/carrinho")}>🛒</button>
          <button>Login</button>
        </div>
      </Header>

      <div className="main-card">
        <div className="div-card">
          <div className="div-header">
            <h4>Produto</h4>
            <h4>preco</h4>
          </div>
          <hr></hr>
          {bdBooks.map((value, index) => (
            <Card showButton={true} books={value} key={index} />
          ))}
        </div>
        <CardItens backgroundColor="#fff">
          <div>
            <h3>Resumo do pedido</h3>
          </div>
          <div className="info-carrinho">
            <span>{books.length} produtos</span>
            <span>
              R$ {books.reduce((prev, curr) => prev + curr.price, 0)}
              ,00
            </span>
          </div>
          <Button color="black" text={"FINALIZAR"}>
            {" "}
          </Button>
        </CardItens>
      </div>
    </Container>
  );
};

export default Display;
