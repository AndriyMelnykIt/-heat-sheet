import React, { FC } from 'react';
import { useParams } from 'react-router';

import Header from '../components/Header';

const QuestionPage: FC = () => {
  const param = useParams();

  return <>
    <Header />
    <div>number: {param.id}</div>
  </>
};

export default QuestionPage;
