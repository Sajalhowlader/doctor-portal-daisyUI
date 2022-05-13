import { Route, Routes } from 'react-router-dom';
import './App.css';
import PatientAppointment from './Pages/AppointmentPage/PatientsAppointment/PatientAppointment';

import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SingIn from './Pages/UserInfo/SingIn/SingIn';

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='appointment' element={<PatientAppointment />} />
          <Route path='singIn' element={<SingIn />} />

        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
