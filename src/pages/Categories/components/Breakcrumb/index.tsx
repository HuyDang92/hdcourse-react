import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';

export default function BreadcrumbComponent({ nameCat, nameCatC2, nameCatC3 }: any) {
  return (
    <Breadcrumbs className="space-x-2 ">
      <Link to="/" className="pe-2 text-lg">
        <IonIcon name="home" />
      </Link>
      {nameCat && (
        <Link to="/" className="pe-2 text-lg font-medium">
          {nameCat}
        </Link>
      )}
      {nameCatC2 && (
        <Link to="/" className="pe-2 text-lg font-medium">
          {nameCatC2}
        </Link>
      )}
      {nameCatC3 && (
        <Link to="/" className="text-lg font-medium">
          {nameCatC3}
        </Link>
      )}
    </Breadcrumbs>
  );
}
