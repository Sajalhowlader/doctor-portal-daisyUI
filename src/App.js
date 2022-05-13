import { Route, Routes } from 'react-router-dom';
import './App.css';
import PatientAppointment from './Pages/AppointmentPage/PatientsAppointment/PatientAppointment';

import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Protected from './Pages/UserInfo/Protected/Protected';
import SingIn from './Pages/UserInfo/SingIn/SingIn';
import SingUp from './Pages/UserInfo/SingUp/SingUp';

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='appointment' element={
            <Protected>
              <PatientAppointment />
            </Protected>} />
          <Route path='singIn' element={<SingIn />} />
          <Route path='singUp' element={<SingUp />} />

        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
