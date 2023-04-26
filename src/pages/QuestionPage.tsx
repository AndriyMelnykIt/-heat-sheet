import React, { FC } from 'react';
import { useParams } from 'react-router';

import Header from '../components/Header/Header';

const QuestionPage: FC = () => {
  const param = useParams();

  return <>
    <Header />
    <div>desc: {param.id}</div>
  </>
};

export default QuestionPage;
