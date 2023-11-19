import Loging from './components/loging';
import Register from './components/register/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgotpsswrd from './pages/forgotpsswrd';
import Homepage from './pages/homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* path for loging page */}
      <Route path='/' element={<Loging/>}/> 
      {/* path for register page */}
      <Route path='/register' element={<Register/>}/>
      {/* path for reset password page */}
      <Route path='/forgotpsswrd' element={<Forgotpsswrd/>}/>
      {/* path for main page */}
      <Route path='/homepage' element={<Homepage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

    
export default App;
