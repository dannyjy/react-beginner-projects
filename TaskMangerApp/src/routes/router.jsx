import { createBrowserRouter } from "react-router";
import App from "../views/App";
import AllTask from "../pages/allTask";
import General from "../pages/general";
import Personal from "../pages/personal";
import Work from "../pages/work";
import Shopping from "../pages/shopping";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <AllTask/>
            },{
                path: '/general',
                element: <General/>
            },{
                path: '/personal',
                element: <Personal/>
            },{
                path: '/work',
                element: <Work/>
            },{
                path: '/shopping',
                element: <Shopping/>
            },
        ]
    },
])

export default router;