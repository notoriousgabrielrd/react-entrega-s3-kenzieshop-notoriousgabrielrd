import { ButtonBlock } from "./style";
import { useDispatch } from "react-redux";
import { addBookThunk } from "../../Store/Modules/thunk";

const Button = ({ book, id, text }) => {
  const dispatch = useDispatch();

  return (
    <ButtonBlock onClick={() => dispatch(addBookThunk(book.id))}>
      {text}
    </ButtonBlock>
  );
};

export default Button;

// AQUI EU RECEBO A PROPS BOOKS
// NO ONCLICK EU DOU DISPATCH NO BOOK.ID
