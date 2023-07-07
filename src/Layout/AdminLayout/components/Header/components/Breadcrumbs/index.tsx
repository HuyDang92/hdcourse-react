import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="text-lg" to="/">
          <IonIcon name="home" className="" />
        </Link>
        <Link className="text-lg" to="/">
          Dashboards
        </Link>
        <span className='text-lg text-org'>Home</span>
      </Breadcrumbs>
    </div>
  );
}
