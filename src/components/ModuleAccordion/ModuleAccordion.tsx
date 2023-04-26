import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { Module } from '../../interfaces';

import styles from './ModuleAccordion.module.css';

interface Props {
  module: Module;
}

const ModuleAccordion: FC<Props> = ({ module }) => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{module.name}</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.question__tile}>
        {module.questions.map(question => <Link className={styles.question__list} key={question.id} to={`/question/${question.id}`}>
            {question.question}
          </Link>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default ModuleAccordion;
