import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { getIdCat, getNameCat, getNameCatC2, getNameCatC3 } from 'features/Category/Category.slice';
import { useDispatch } from 'react-redux';
import slugify from 'slugify';

export default function BreadcrumbComponent({ nameCat, nameCatC2, nameCatC3 }: any) {
  const dispatch = useDispatch();

  const slugC1 =
    nameCat && typeof nameCat.name === 'string'
      ? slugify(nameCat.name, { replacement: '-', lower: true, strict: true })
      : '';
  const slugC2 =
    nameCatC2 && typeof nameCatC2.name === 'string'
      ? slugify(nameCatC2.name, { replacement: '-', lower: true, strict: true })
      : '';
  const slugC3 =
    nameCatC3 && typeof nameCatC3.name === 'string'
      ? slugify(nameCatC3.name, { replacement: '-', lower: true, strict: true })
      : '';
  const handleRouteUrl = (
    idCat: string,
    nameCatC1: string,
    idCatC1?: string,
    nameCatC2?: string,
    idCatC2?: string,
    nameCatC3?: string,
    idCatC3?: string
  ) => {
    dispatch(getIdCat(idCat));
    dispatch(getNameCat({ name: nameCatC1, id: idCatC1 }));
    dispatch(getNameCatC2({ name: nameCatC2, id: idCatC2 }));
    dispatch(getNameCatC3({ name: nameCatC3, id: idCatC3 }));
  };

  return (
    <Breadcrumbs className="space-x-2 ">
      <Link to="/" className="pe-2 md:text-lg">
        <IonIcon name="home" />
      </Link>
      {nameCat && (
        <Link
          onClick={() => handleRouteUrl(nameCat.id, nameCat.name, nameCat.id)}
          to={`/categories/${slugC1}`}
          className="pe-2 font-medium md:text-lg"
        >
          {nameCat.name}
        </Link>
      )}
      {nameCatC2 && (
        <Link
          onClick={() =>
            handleRouteUrl(nameCatC2.id, nameCat.name, nameCat.id, nameCatC2.name, nameCatC2.id)
          }
          to={`/categories/${slugC1}/${slugC2}`}
          className="pe-2 font-medium md:text-lg"
        >
          {nameCatC2.name}
        </Link>
      )}
      {nameCatC3 && (
        <Link
          onClick={() =>
            handleRouteUrl(
              nameCatC3.id,
              nameCat.name,
              nameCat.id,
              nameCatC2.name,
              nameCatC2.id,
              nameCatC3.name,
              nameCatC3.id
            )
          }
          to={`/categories/${slugC1}/${slugC2}/${slugC3}`}
          className="font-medium md:text-lg"
        >
          {nameCatC3.name}
        </Link>
      )}
    </Breadcrumbs>
  );
}
