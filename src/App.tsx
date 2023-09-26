import './App.css';
import { Form, List } from './pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/create",
    element: <Form />
  }
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
