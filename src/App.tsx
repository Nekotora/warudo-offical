import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Outlet } from 'react-router-dom'
import { SiteNav } from './components/nav'

function App() {
  return (
    <div className="app-main warudo-main">
      <SiteNav />
      <Outlet />
    </div>
  )
}

export default App
