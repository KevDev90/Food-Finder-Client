import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";

//App renders certain components conditionally based on url filepath

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/restaurants" component={Home} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailPage}
            />
            <Route path="*" component={NotFound} />

          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
