// import NavBar from './NavBar'

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