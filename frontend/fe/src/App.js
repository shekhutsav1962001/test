import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { AuthProvider } from "./helpers/auth";
import RequireAuth from "./helpers/RequireAuth";
function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route exact={true} path="/" element={<Signin />}></Route>
        <Route exact={true} path="/signup" element={<Signup />}></Route>
        <Route
          exact={true}
          path="/homepage"
          element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
