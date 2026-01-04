import { Route, Routes } from 'react-router'
import DashboardLayout from '../Components/DashboardLayout'
import DashboardPage from '../Pages/DashboardPage'
import LeadsPage from '../Pages/LeadsPage'
import Login from '../Pages/Login'
import  Signup from '../Pages/Signup'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />} />
        <Route element={<DashboardLayout/>}>
             <Route path='/' element={<DashboardPage/>}/>
             <Route path='/leads' element={<LeadsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
