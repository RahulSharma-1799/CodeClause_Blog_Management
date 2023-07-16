import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/account/Login";
import DataProvider from "./context/DataProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <Router>
        
        <div style={{ marginTop: "50px" }}>
          <Routes>
            <Route
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home />} />
            </Route> 
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
