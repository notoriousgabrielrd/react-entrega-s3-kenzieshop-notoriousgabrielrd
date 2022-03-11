import { Switch, Route } from "react-router-dom";
import Display from "../Components/Display";
import Cart from "../Components/Cart";
import CartPage from "../Page/Carrinho";


// para fazer a autenticacao vou usar o useEffect



const Routes = () => {


    return (
        <Switch>
            <Route exact path="/">
                <Display />
            </Route>
            <Route path="/carrinho">
                <Cart />
                {/* <CartPage /> */}
            </Route>
        </Switch>

    )


}


export default Routes