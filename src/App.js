import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/WelcomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetails";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
