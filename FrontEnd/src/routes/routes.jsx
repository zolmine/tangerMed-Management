import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private.routes";
import AdminLogin from "../Pages/AdminLogin";
import UrbanCenter from "../Pages/Ships/Ships";
import Navigation from "./Navigation";
import { useCookies } from "react-cookie";

const Routers = () => {
  const [cookies, setCookie] = useCookies();
  return (
    <BrowserRouter>
      {cookies.user && <Navigation />}
      <div
        className={`${
          cookies.user ? "pl-[13em]  pr-[1.5em]" : ""
        }  bg-white min-h-screen `}
      >
        <Routes>
          <Route path="/" element={<AdminLogin />} />

          {/* <Route path="/adminLogin" element={<AdminLogin />} /> */}

          <Route
            path="/manageTitanic"
            element={
              // <PrivateRoute user="manager">
              // </PrivateRoute>
              <UrbanCenter />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default Routers;
