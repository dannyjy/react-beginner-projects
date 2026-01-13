import { Outlet } from "react-router"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const App = () => {
  return (
    <div className="flex h-fit text-gray-700">
      <SideBar />
      <div className="h-full w-full">
        <NavBar />
        <main className="px-5 py-8">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default App