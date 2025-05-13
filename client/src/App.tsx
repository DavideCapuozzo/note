
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLogin from './app/page/auth/login'
import AuthRegistration from './app/page/auth/registration'
import AuthLayout from './components/login-component/layout'


function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
          <Route path='login' element={<AuthLogin></AuthLogin>}></Route>
          <Route path='registration' element={<AuthRegistration></AuthRegistration>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
