import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/Admin";
import CreateAdmin from "./pages/CreateAdmin";

// Browser Router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/:id",
    element: <Admin />,
  },
  {
    path: "/admin/",
    element: <Admin />,
  },
  {
    path: "/admin/create",
    element: <CreateAdmin />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
