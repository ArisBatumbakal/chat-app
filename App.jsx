import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home';
import MainPage from './Pages/MainPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import UnknownPage from './Pages/UnknownPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<UnknownPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
