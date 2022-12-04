import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <div className="home-layout">
      <div className="home-layout__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout
