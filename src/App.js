import { Route, Routes } from "react-router-dom";
import "./App.css";
import PatientAppointment from "./Pages/AppointmentPage/PatientsAppointment/PatientAppointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";

import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Protected from "./Pages/UserInfo/Protected/Protected";
import RequireAdmin from "./Pages/UserInfo/RequireAdmin/RequireAdmin";
import SingIn from "./Pages/UserInfo/SingIn/SingIn";
import SingUp from "./Pages/UserInfo/SingUp/SingUp";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="appointment"
            element={
              <Protected>
                <PatientAppointment />
              </Protected>
            }
          />
          <Route
            path="dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          >
            <Route index element={<MyAppointment />} />
            <Route path="review" element={<MyReview />} />
            <Route
              path="allUsers"
              element={
                <RequireAdmin>
                  <AllUsers />
                </RequireAdmin>
              }
            />

            <Route
              path="addDoctor"
              element={
                <RequireAdmin>
                  <AddDoctor />
                </RequireAdmin>
              }
            />
            <Route
              path="manageDoctor"
              element={
                <RequireAdmin>
                  <ManageDoctor />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="singIn" element={<SingIn />} />
          <Route path="singUp" element={<SingUp />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
