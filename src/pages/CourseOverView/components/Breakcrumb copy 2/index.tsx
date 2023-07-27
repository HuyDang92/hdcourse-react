import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';

export default function BreadcrumbComponent({ nameCourse }: any) {
  return (
    <Breadcrumbs className="space-x-2 bg-transparent text-white">
      <Link to="/" className="pe-2 text-[20px] text-white">
        <IonIcon name="home" />
      </Link>
      <Link to="/" className="pe-2 text-[15px] font-medium text-white">
        Khóa học
      </Link>
      <Link to="/course" className="text-[15px] font-medium text-white">
        {nameCourse}
      </Link>
    </Breadcrumbs>
  );
}
