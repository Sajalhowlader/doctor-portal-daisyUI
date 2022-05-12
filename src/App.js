import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
