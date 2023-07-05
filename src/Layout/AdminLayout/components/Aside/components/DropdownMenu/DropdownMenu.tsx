import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IonIcon from '@reacticons/ionicons';
import { NavLink } from 'react-router-dom';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  marginBottom: '15px',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  boxShadow: '0px 10px 75px -3px rgba(0,0,0,0.2);',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <IonIcon
            name="grid"
            className="me-4 rounded-md bg-gradient-to-br from-org to-amber-400 p-3 text-lg text-white shadow-lg"
          />
          <span className="mt-2 font-medium">Dashboards</span>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="ps-5 font-medium text-gray-400">
            <li className="list-disc p-3 text-gray-900">
              <NavLink className="" to="/admin">
                Overview
              </NavLink>
            </li>
            <li className="list-disc p-3 ">
              <NavLink className="" to="/admin">
                Overview
              </NavLink>
            </li>
            <li className="list-disc p-3 ">
              <NavLink className="" to="/admin">
                Overview
              </NavLink>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <IonIcon
            name="person-circle"
            className="me-4 rounded-md bg-white p-3 text-lg text-darkLight shadow-xl"
          />
          <span className="mt-2 font-medium">Profile</span>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="ps-5 font-medium text-gray-400">
            <li className="list-disc p-3 text-gray-900">
              <NavLink className="" to="/admin">
                Overview
              </NavLink>
            </li>
            <li className="list-disc p-3 ">
              <NavLink className="" to="/admin">
                Overview
              </NavLink>
            </li>
            <li className="list-disc p-3 ">
              <NavLink className="" to="/admin">
                Overview
              </NavLink>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
