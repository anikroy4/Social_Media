import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Registration from '../src/pages/registration/Registration'
import Login from './pages/login/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Login />}>
      <Route path='/registration' element={<Registration />} />
    </Route>
  )
)





function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
