import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
