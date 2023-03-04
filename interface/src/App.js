import React from "react";
import Feed from "./pages/feed";
import Login from "./pages/login";
import Register from "./pages/register"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/home" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
