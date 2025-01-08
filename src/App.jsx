import { useEffect } from 'react';
import Login from './pages/Login';
import {Routes, Route, useNavigate, Router} from 'react-router-dom'

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  useEffect(() => {
    if(!user){
      navigate("/login");
    }
  },[])
   
  return (
    <>
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </Router>

    
     
    </>
  )
}

export default App
