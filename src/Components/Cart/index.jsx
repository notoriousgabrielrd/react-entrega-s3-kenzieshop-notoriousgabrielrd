import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookThunk } from "../../Store/Modules/thunk";
import { DivCart } from "./styled";
import "./styles.css";
import { useEffect, useState } from "react";

const Cart = () => {
  // inicializacao
  const [listBooks, setListBooks] = useState([]);
  const [update, setUpdate] = useState(false);
  const books = useSelector((store) => store.bookList);
  const dispatach = useDispatch();
  const history = useHistory();
  // inicializacao

  // O react nao monitora constantes
  // monitora states
  // Usar o useEffect com !update para receber a cada clique o selector

  // montagem
  // useEffect(() => {
  //   if(passou = true){
  //   //  faz a req
  //   }
  //   setListBooks([...books]);
  //   setpassou(false) => nunca mais vai ler passou a nao ser no reload da pagina
  // }, []);
  // montagem

  useEffect(() => {
    setListBooks([...books]);
  }, [update]);

  return (
    <>
      <button className="button-sair" onClick={() => history.push("/")}>
        {" "}
        Voltar 🚪🏃‍♂️{" "}
      </button>
      <div className="pai">
        {books.map((value, index) => (
          <div key={index} className="div-cart">
            <DivCart>
              <img src={value.img} alt={value.name} />
              <span> {value.name}</span>
              <div className="div-price">
                <span>R$ {value.price},00</span>
              </div>
              <button
                className="button-cart"
                onClick={() => {
                  dispatach(deleteBookThunk(index));
                  setUpdate(!update);
                }}
              >
                🗑️
              </button>
            </DivCart>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
