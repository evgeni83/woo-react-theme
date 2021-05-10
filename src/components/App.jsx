import { Switch, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import './App.scss';
import Archive from "./Archive/Archive";
import SingleProduct from "./SingleProduct/SingleProduct";


function App() {
    return (
        <div className="app">
            <header>
                <div>LOGO</div>
                <Menu/>
            </header>
            <main className="main">
                <Switch>
                    <Route exact path="/">
                        <h1>Home</h1>
                    </Route>
                    <Route path={ ["/shop", "/product-category/:prod_cat"] }>
                        <Archive/>
                    </Route>
                    <Route path="/my-account">
                        <h1>My account</h1>
                    </Route>
                    <Route path="/product/:slug">
                        <SingleProduct/>
                    </Route>
                    <Route>
                        <h1>404</h1>
                    </Route>
                </Switch>
            </main>
            <footer>FOOTER</footer>
        </div>
    );
}

export default App;
