import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Outlet, useLocation, useOutlet } from 'react-router-dom'
import { SiteNav } from './components/nav'
import { SiteHeader } from './components/header'
import { SiteFooter } from './components/footer'
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group";
import { router, routes } from './main'

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet()
  const { nodeRef } = (routes.find((route) => route.path === location.pathname) ?? {}) as any

  return (
    <div className="app-main warudo-main">
      <SiteHeader />
      <SiteNav />
      <div className="app-main">
        <SwitchTransition>
          <CSSTransition
            timeout={300}
            key={location.pathname}
            classNames="page-transition"
            unmountOnExit
            nodeRef={nodeRef}
          >
             {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <SiteFooter />
    </div>
  )
}

export default App
