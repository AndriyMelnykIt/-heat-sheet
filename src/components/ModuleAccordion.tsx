import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { Module } from '../interfaces';

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
      <AccordionDetails  style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {module.questions.map(question => <Link key={question.id} to={`/question/${question.id}`}>
            {question.question}
          </Link>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default ModuleAccordion;
