// import NavBar from './NavBar'

import React from "react"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
        {/* <NavBar/> */}
        {props.children}
    </div>
  )
}

export default Layout