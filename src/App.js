// import Topbar from "./components/topbar/Topbar";
// import Sidebar from "./components/sidebar/Sidebar";
// import Feed from "./components/feed/Feed";
// import Rightbar from "./components/rightbar/Rightbar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import "./pages/home/home.css"
function App() { 
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
