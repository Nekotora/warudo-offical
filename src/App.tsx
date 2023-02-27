import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Outlet } from 'react-router-dom'
import { SiteNav } from './components/nav'
import { SiteHeader } from './components/header'

function App() {
  return (
    <div className="app-main warudo-main">
      <SiteHeader />
      <SiteNav />
      <Outlet />
    </div>
  )
}

export default App
