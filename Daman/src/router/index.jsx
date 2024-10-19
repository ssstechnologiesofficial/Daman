import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import Login from '../Login_registration/Login';
import Home from '../components/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
    ],
  },
]);
