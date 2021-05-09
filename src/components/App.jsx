import { Switch, Route, useParams } from "react-router";
import Menu from "./Menu/Menu";
import './App.scss';

const Category = () => {
    console.log(useParams());
    const { prod_cat } = useParams();
    return <h1>Category: { prod_cat }</h1>
}

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
                    <Route path="/shop">
                        <h1>Shop</h1>
                    </Route>
                    <Route path="/my-account">
                        <h1>My account</h1>
                    </Route>
                    <Route path="/product-category/:prod_cat">
                        <Category />
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
