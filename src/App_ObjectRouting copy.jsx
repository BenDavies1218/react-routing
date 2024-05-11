import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "./Pages/_baseLayout";

const someRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={someRouter}></RouterProvider>
    </>
  );
}

export default App;
