import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
