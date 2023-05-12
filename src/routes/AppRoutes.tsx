import { Route, Routes } from 'react-router-dom';

import QuestionPage from '../pages/QuestionPage';
import HomePage from '../pages/HomePage';
import Layout from '../common/Layout.tsx/Layout';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='question/:moduleId/:id' element={<QuestionPage />}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes;
