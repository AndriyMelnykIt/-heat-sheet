import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

interface Props {
  number: number;
  id: number;
}

const Module: FC<Props> = ({ number, id }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion {number}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* TODO: Add list of questions */}
        <Typography>list of questions</Typography>
        <Link to={`/question/${id}`}>question</Link>
      </AccordionDetails>
    </Accordion>
  );
};

export default Module;
