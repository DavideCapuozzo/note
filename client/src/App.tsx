
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLogin from './app/page/auth/login'
import AuthRegistration from './app/page/auth/registration'
import AuthLayout from './components/login-component/layout'
import LayoutDashboard from './components/dashboard-component/layout-dashboard'
import PageDashboard from './app/page/dashboard/dashboard'
import NotFound from './app/page/not-found'
import CheckAuth from './components/common/check-auth'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { checkAuth } from './store/auth-slice'
import type {AppDispatch} from './store/store'
//import UnauthPage from './app/page/unauth-page'


function App() {

  /* const isAuthenticated = false;  */
  /* const user = null */
  /* const user = {
    name:'Davide',
    role:'user'
  } */

  const {user, isAuthenticated, isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(checkAuth());
  },[dispatch])

  if (isLoading) return <div>Loading...</div>

  console.log(isLoading, user);

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout></AuthLayout></CheckAuth>}>
          <Route path='login' element={<AuthLogin></AuthLogin>}></Route>
          <Route path='registration' element={<AuthRegistration></AuthRegistration>}></Route>
        </Route>
        <Route path="/myuser" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><LayoutDashboard></LayoutDashboard></CheckAuth>}>
          <Route path='dashboard' element={<PageDashboard></PageDashboard>}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
        {/* <Route path='/unauth-page' element={<UnauthPage />}></Route> */}
      </Routes>
      
    </div>
  )
}

export default App


//auth integration min 1.16
