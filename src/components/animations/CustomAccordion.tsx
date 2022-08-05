import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageGallery from './ImageGallery';

const CustomAccordion:React.FC<{ title:string, contentText:string, img:string[], defaultExpanded: boolean  }> = ({ title, contentText, img, defaultExpanded }) => {
  return (

      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><LocationOnIcon /> {title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ImageGallery images={img} />
          <Typography>
            {contentText}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}

export default CustomAccordion