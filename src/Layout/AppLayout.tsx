import { Outlet } from "react-router"
import Header from "./Header"

const AppLayout = () => {
  return (
    <>
    <Header />
    <div className="app-layout">
        <Outlet />
    </div>
    </>
  )
}

export default AppLayout