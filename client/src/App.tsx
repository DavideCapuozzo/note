
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLogin from './app/page/auth/login'
import AuthRegistration from './app/page/auth/registration'
import AuthLayout from './components/login-component/layout'
import LayoutDashboard from './components/dashboard-component/layout-dashboard'
import PageDashboard from './app/page/dashboard/dashboard'


function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
          <Route path='login' element={<AuthLogin></AuthLogin>}></Route>
          <Route path='registration' element={<AuthRegistration></AuthRegistration>}></Route>
        </Route>
        <Route path="/myuser" element={<LayoutDashboard></LayoutDashboard>}>
          <Route path='dashboard' element={<PageDashboard></PageDashboard>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
