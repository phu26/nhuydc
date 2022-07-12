import HomePage from "./pages/HomePage"
import Login from "./pages/login/index";

import {
  BrowserRouter as Router,

  Route,
  Routes ,
  Navigate,
} from "react-router-dom";

function App()
{

  const  user = "";
  return(
    <Router>
        <Routes>
        <Route exact path="/">
          {user ? <HomePage /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
     
      
      </Routes>
    </Router>
  )
}

export default App;