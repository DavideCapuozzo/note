
import './App.css'
/* import AdminLayout from './components/page/page'*/
import Page from './app/dashboard/page'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Page />} />
        {/* altre route... */}
      </Routes>
    </Router>
  )
}

export default App
