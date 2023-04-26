import { FC } from 'react';
import { useParams } from 'react-router';

import useGetObjectById from '../hooks/useGetObjectById';
import CustomSyntaxHighlighter from '../common/CustomSyntaxHighlighter';
import { modules } from '../../mock_db';

import Header from '../components/Header/Header';

const QuestionPage: FC = (): JSX.Element => {
  const param = useParams();
  const item = useGetObjectById(modules, param.id as string);

  return (
    <>
      <Header />
      {!!item && item.descriptions.length !== 0 ? (
        <>
          {item.descriptions.map((el) => {
            if (el.code) {
              return (
                <div key={el.label}>
                  <div>{el.label}</div>
                  <CustomSyntaxHighlighter codeString={el.description} />
                </div>
              );
            }

            return (
              <div key={el.label}>
                <div>{el.label}</div>
                <div>{el.description}</div>
              </div>
            );
          })}
        </>
      ) : (
        <span>Data not found</span>
      )}
    </>
  );
};

export default QuestionPage;
