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
import EditJabatan from './pages/Edit/EditJabatan';
import EditKaryawan from './pages/Edit/EditKaryawan';
import EditKontrak from './pages/Edit/EditKontrak';

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
    path: "/edit-jabatan/:id",
    element: <EditJabatan />,
  },
  {
    path: "/edit-karyawan/:id",
    element: <EditKaryawan/>,
  },
  {
    path: "/edit-kontrak/:id",
    element: <EditKontrak />,
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
