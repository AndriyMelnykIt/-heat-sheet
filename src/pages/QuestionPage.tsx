import { FC } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import useGetObjectById from '../hooks/useGetObjectById';
import { isUrl } from '../services/isUrl';
import CustomSyntaxHighlighter from '../common/CustomSyntaxHighlighter';

import Header from '../components/Header/Header';

import { modules } from '../../mock_db';

import { styled } from '@mui/system';

const BasicLabel = styled('div')`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Description = styled('div')`
  font-size: 16px;
  line-height: 1.5;
`;

const QuestionPage: FC = (): JSX.Element => {
  const param = useParams();
  const item = useGetObjectById(modules, param.moduleId as string, param.id as string);

  return (
    <>
      <Header/>
      {!!item && item.descriptions.length !== 0 ? (
        <>
          {item.descriptions.map((el, idx) => {
            if (el.code) {
              return (
                <div key={idx}>
                  <BasicLabel>{el.label}</BasicLabel>
                  <CustomSyntaxHighlighter codeString={el.description}/>
                </div>
              );
            }

            return (
              <div key={idx}>
                <BasicLabel>{el.label}</BasicLabel>
                {isUrl(el.description) ? <Link to={el.description}>{el.description}</Link>
                  :
                  <Description>{el.description}</Description>}
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
