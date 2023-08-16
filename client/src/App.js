import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Watch from './components/Watch';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
   <div className='App'>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
