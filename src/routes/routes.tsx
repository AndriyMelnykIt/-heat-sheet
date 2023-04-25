import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Test from '../components/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

export default router;
