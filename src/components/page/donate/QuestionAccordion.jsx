/* eslint-disable react/prop-types */
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const QuestionAccordion = ({ question }) => {
  return (
    <div className="div-accordion main">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{question.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{question.text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QuestionAccordion;
