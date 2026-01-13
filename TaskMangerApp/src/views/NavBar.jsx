import { useState } from 'react'
import CreateTask from '../ui/CreateTask'
import { useLocation } from 'react-router'
import { PanelLeftOpen } from 'lucide-react'
import SideBar from './SideBar'

const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const location = useLocation();
    // const showAddForm = () => {

    // }
  const hideSideBar = () => {
    

  }

  return (
    <nav className={`sticky top-0 rounded-b-xl flex justify-between items-center bg-gray-50 px-5 md:px-8 py-4 shadow-amber-100`}>
        <div className='flex items-center justify-center gap-4'>
          <PanelLeftOpen size={30} className='lg:hidden' onClick={hideSideBar}/>
          <div className=''>
            <h1 className='text-xl font-bold '>{location.pathname === '/' ? "All Task" : location.pathname}</h1>
            <p className='text-sm'>{0} Tasks Available</p>
          </div>
        </div>
        {isOpen && <CreateTask/>}
        <button className='bg-blue-500 px-4 py-3 text-white rounded-xl hover:cursor-pointer hover:bg-blue-600' onClick={() => setIsOpen(true)}>New Task</button>
    </nav>
  )
}

export default NavBar