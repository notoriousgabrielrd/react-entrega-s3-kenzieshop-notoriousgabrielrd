import { Divitem } from "./style";
import Button from "../Button/index";
import "./style.css";

const Card = ({ books, id, showButton = false }) => {
  return (
    <>
      <Divitem>
        <img src={books.img} alt={books.name} />
        <span> {books.name}</span>
        <div className="div-price">
          <span>R$ {books.price},00</span>
          {showButton && <Button text={"ADICIONAR"} book={books} />}
        </div>
      </Divitem>
      <hr></hr>
    </>
  );
};

export default Card;
