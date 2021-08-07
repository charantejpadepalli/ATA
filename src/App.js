import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddCustomer } from "./component/Customer/AddCustomer";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import { DeleteCustomer } from "./component/Customer/DeleteCustomer";
import { ViewCustomer } from "./component/Customer/ViewCustomer";
import { CheckLogin, Login } from "./component/Customer/CheckLogin";
import Logout from "./component/Customer/Logout";
import { ModifyCustomer } from "./component/Customer/ModifyCustomer";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          {/* <Route exact path='/' component={Login}/> */}
          <Route exact path='/' component={CheckLogin}/>
          <Route exact path='/customers/logout' component={Logout}/>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/loginreg/about" component={About} />
          <Route exact path="/loginreg/contact" component={Contact} />
          <Route exact path="/customers/view/:id" component={ViewCustomer} />
          <Route exact path="/customers/add" component={AddCustomer} />
          <Route exact path="/customers" component={Home} />
          <Route
            exact
            path="/customers/modify/:id"
            component={ModifyCustomer}
          />
          <Route
            exact
            path="/customers/delete/:id"
            component={DeleteCustomer}
          />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );

}

export default App;
