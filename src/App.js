import './style/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Preload from './components/preload/index';
import Register from './components/preload/register';
import Login from  './components/preload/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Preload/>}/>
        <Route path='signin' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
