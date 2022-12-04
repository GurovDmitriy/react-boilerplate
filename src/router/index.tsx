import { createBrowserRouter } from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout/HomeLayout"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
])

export default router
