import { FC } from 'react';
import { useParams } from 'react-router';

import Header from '../components/Header';
import useGetObjectById from '../hooks/useGetObjectById';
import { modules } from '../../mock_db';

const QuestionPage: FC = () => {
  const param = useParams();
  const item = useGetObjectById(modules, param.id as string);

  return <>
    <Header />
    {!!item ? <div>desc: {param.id}</div> : <span>Data not found</span>}
  </>
};

export default QuestionPage;
