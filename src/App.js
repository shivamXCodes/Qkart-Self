import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import reactRouterDom from "react-router-dom";
import {route,link} from 'react-router-dom';
import Products from "./components/Products";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Login } from "@mui/icons-material";

export const config = {
  endpoint: "http://localhost:8082/api/v1",
};

function App() {
  return (
    <div className="App">
      <switch>

        <Route exact path = '/'>
          <Products/>
        </Route>

        <Route exact path = '/login'>
          <Login/>
        </Route>

        <Route exact path = '/register'>
          <Register/>
        </Route>

      </switch>
    </div>
    
  );
}

export default App;