import { Route, Routes } from 'react-router-dom';

import QuestionPage from '../pages/QuestionPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/question/:id' element={<QuestionPage />}/>
    </Routes>
  )
}

export default AppRoutes;
