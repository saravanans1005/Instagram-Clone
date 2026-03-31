import React from 'react'
import Sidebar from './Sidebar.jsx'
import Suggestion from './Suggestion.jsx'
import { Outlet } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div className="d-flex vh-100">

      {/* Sidebar */}
      <div style={{width:"20%"}}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{width:"50%"}} className="overflow-auto">
        <Outlet />
      </div>

      {/* Suggestions */}
      <div style={{width:"30%"}}>
        <Suggestion />
      </div>

    </div>
  )
}

export default App