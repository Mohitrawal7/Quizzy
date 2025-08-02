import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import LeaderBoardPage from './pages/LeaderBoardPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/register' element={<RegisterPage/>}/>
<Route path='/leaderboard' element={
  <LeaderBoardPage/>
  }/>
<Route 
path='/dashboard' 
  element={
    <ProtectedRoute>
  <DashboardPage/>
    </ProtectedRoute>
  }
/>
<Route path='#' element={<p>there is nothing on here. 404! </p>}/>
</Routes>
   </div>
  )
}

export default App
