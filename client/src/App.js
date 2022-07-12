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

  const  user = false;
  return(
    <Router>
        <Routes>
        <Route exact path="/"
          element={user ? <HomePage /> : <Login />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
     
      
      </Routes>
    </Router>
  )
}

export default App;