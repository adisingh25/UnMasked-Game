


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./components/Login";
import Browse from "./components/Browse";
import Gameover from "./components/Gameover";
import LeaderBoard from "./components/LeaderBoard";

function App() {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path : "/gameover",
      element : <Gameover />
    },
    {
      path : "/leader-board",
      element : <LeaderBoard />
    }
  ])


  return (

    <div>
      <RouterProvider router={appRouter} />
    </div>

  );
}

export default App;
