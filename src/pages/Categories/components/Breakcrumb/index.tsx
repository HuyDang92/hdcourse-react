import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';

export default function BreadcrumbComponent({ nameCat }: any) {
  return (
    <Breadcrumbs className="space-x-2 ">
      <Link to="/category" className="pe-2 text-lg opacity-60">
        <IonIcon name="home" />
      </Link>
      <Link to="/" className="pe-2 text-lg font-medium opacity-60">
        Categories
      </Link>
      <Link to="/category" className="text-lg font-medium">
        {nameCat}
      </Link>
    </Breadcrumbs>
  );
}
