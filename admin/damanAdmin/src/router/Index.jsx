import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import WinGo from '../components/WinGo';
import K3 from '../components/K3';
import FiveD from '../components/FiveD';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Sidebar/>,
                children: [
                    {
                        path: 'dashboard',
                        element: <Dashboard/>,
                    },
                    {
                        path: 'winGo',
                        element: <WinGo/>,
                    },
                    {
                        path: 'K3',
                        element: <K3/>,
                    },
                    {
                        path: 'FiveD',
                        element: <FiveD/>,
                    },
                ],
            },
        ],
    },
]);