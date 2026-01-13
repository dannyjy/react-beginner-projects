// import { useState } from "react";
import { Link } from "react-router";
import { LucideShoppingCart, AlignVerticalDistributeCenterIcon, WorkflowIcon, Home } from "lucide-react";
import General from '../pages/general';

const SideBar = () => {
  const categories = [
    {
      route: "/",
      categoryName: "All Task",
      icon: <Home/>,
      numberOfTask: 0
    },{
      route: "/general",
      categoryName: "All Task",
      icon: <AlignVerticalDistributeCenterIcon/>,
      numberOfTask: 0
    },{
      route: "/work",
      categoryName: "All Task",
      icon: <WorkflowIcon/>,
      numberOfTask: 0
    },{
      route: "/personal",
      categoryName: "All Task",
      icon: <AlignVerticalDistributeCenterIcon/>,
      numberOfTask: 0
    },{
      route: "/shopping",
      categoryName: "Shopping",
      icon: <LucideShoppingCart/>,
      numberOfTask: 0
    }
  ]
  console.log(categories)
  return (
    <div className="bg-gray-50 px-4 py-2 h-screen w-100 z-10 max-md:hidden max-md:rounded-r-2xl">
        <div>
            <h1 className='text-2xl'>Tas<span className='text-blue-400'>Kep</span></h1>
        </div>
        <div className="gap-4">
          <ul className="flex flex-col gap-2">
            {/* <li className="bg-amber-200 px-6 py-4"><Link to={"/"}>AllTasks</Link></li>
            <li><Link to={"/general"}>General</Link></li> */}
            {/* {categories.map((c,i) => <li key={i}><RouteButtton route={c.route} categoryName={c.categoryName} icon={c.icon} numberOfTask={c.numberOfTask}/></li>)} */}
          </ul>
        </div>
    </div>
  )
}

const RouteButtton = (id,route,categoryName,icon,numberOfTask = 0) => {
  return (
    
    <li className="flex justify-between items-center  rounded-2xl bg-amber-300">
      <Link to={route} className="flex justify-between items-center  rounded-2xl" key={id}>
        <div>{icon}</div>
        <h1>{categoryName}</h1>
        <div className="text-sm rounded-full w-">{numberOfTask}</div>
      </Link>
    </li>
  )
}

export default SideBar