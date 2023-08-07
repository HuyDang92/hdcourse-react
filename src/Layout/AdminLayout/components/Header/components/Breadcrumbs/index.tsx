import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

export default function BasicBreadcrumbs() {
  const subTitle = useSelector((state: RootState) => state.asideAdmin.subTitle);
  const title = useSelector((state: RootState) => state.asideAdmin.title);

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className="text-lg" to="/">
          <IonIcon name="home" className="" />
        </Link>
        <Link className="text-lg" to="/">
          {subTitle}
        </Link>
        <span className="text-lg text-org">{title}</span>
      </Breadcrumbs>
    </div>
  );
}
