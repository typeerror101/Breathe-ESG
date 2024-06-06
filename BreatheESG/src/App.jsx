import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/'  element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
