import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Registrasi from './Components/Registrasi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/registrasi' element={<Registrasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
