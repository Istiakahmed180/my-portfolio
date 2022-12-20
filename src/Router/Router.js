import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/project/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-personal-portfolio-server.vercel.app/projects/${params.id}`
          ),
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default router;
