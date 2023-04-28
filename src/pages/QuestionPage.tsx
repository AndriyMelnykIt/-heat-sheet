import { FC } from 'react';
import { useParams } from 'react-router';

import useGetObjectById from '../hooks/useGetObjectById';
import CustomSyntaxHighlighter from '../common/CustomSyntaxHighlighter';
import { modules } from '../../mock_db';

import Header from '../components/Header/Header';

import { styled } from '@mui/system';

const BasicLabel = styled('div')`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`

const Description = styled('div')`
  font-size: 16px;
  line-height: 1.5;
`

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
                <BasicLabel>{el.label}</BasicLabel>
                <Description>{el.description}</Description>
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
