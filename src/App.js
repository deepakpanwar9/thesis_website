import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { AuthProvider } from "./contexts/AuthContext";
import My_blog from "./My_blog.js";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import PrivateRoute from "./PrivateRoute";
import NotToUserRoute from "./NotToUserRoute";
import ForgotPassword from "./ForgotPassword";
import AdminManageAccount from "./AdminManageAccount";
import AdminContact from "./AdminContacts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Myblog" exact component={My_blog} />
            <PrivateRoute
              path="/admin/dashboard"
              exact
              component={AdminDashboard}
            />
            <PrivateRoute
              path="/admin/manage-account"
              exact
              component={AdminManageAccount}
            />
            <PrivateRoute
              path="/admin/contacts"
              exact
              component={AdminContact}
            />
            <NotToUserRoute
              path="/admin/forgot-password"
              exact
              component={ForgotPassword}
            />
            <NotToUserRoute path="/admin/login" exact component={AdminLogin} />
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
