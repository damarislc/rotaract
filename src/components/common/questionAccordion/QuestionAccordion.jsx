/* eslint-disable react/prop-types */
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const QuestionAccordion = ({ item }) => {
  return (
    <div className="div-accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QuestionAccordion;
