import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { SignIn } from './Pages/SignIn';
import { Signup } from './Pages/signup';
import { Dashboard } from './Pages/Dashboard';
function   App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/signin" element={<SignIn/>}>
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
          </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App
