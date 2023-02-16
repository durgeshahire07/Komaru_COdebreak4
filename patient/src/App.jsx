import './App.css'
import { Route, Routes } from "react-router-dom"
import Navb from './Components/nav/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Doc_chat from './Components/notification/Doc_chat';
import Noti from './Components/noti/Noti';

function App() {

  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/doc' element={<Doc_chat/>} />
        <Route path='/notification' element={<Noti/>} />
        {/* <Route path='/setting' element={<Setting />} /> */}
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App
