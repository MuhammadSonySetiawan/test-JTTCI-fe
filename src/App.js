import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from './pages/Home';
import Jabatan from './pages/Jabatan';
import Karyawan from './pages/Karyawan';
import Kontrak from './pages/Kontrak';
import Edit from './pages/Edit/Edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jabatan",
    element: <Jabatan />,
  },
  {
    path: "/karyawan",
    element: <Karyawan />,
  },
  {
    path: "/kontrak",
    element: <Kontrak />,
  },
  {
    path: "/edit",
    element: <Edit />,
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
