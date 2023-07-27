import { useGetAllCatQuery } from 'features/Category/category.service';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ICategories } from 'types/Home';
import LoadingLocal from 'components/LoadingLocal';

export default function Dropdown() {
  const { data, isFetching } = useGetAllCatQuery();

  return (
    <div className="relative">
      <div className="group inline-block cursor-pointer">
        <button className="flex w-40 items-center justify-between rounded-md border bg-white px-3 py-2 outline-none focus:outline-none">
          <IonIcon name="cube" className="text-2xl text-org" />
          <span className="flex-1 pr-1 font-semibold">Chủ đề</span>
          <span>
            <svg
              className="h-4 w-4 transform fill-current text-org transition duration-150 ease-in-out group-hover:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul className="text-md absolute  top-[110%] w-72 origin-top scale-0 transform space-y-1 rounded-md border bg-white p-1 shadow-border-full transition duration-150 ease-in-out group-hover:scale-100">
          {isFetching && <LoadingLocal />}
          {!isFetching &&
            data.map((item: any, index: number) => {
              const slug = item.name.replace(/\s/g, '-');
              return (
                <li key={index} className=" relative rounded-sm hover:bg-gray-200">
                  <Link to={`/categories/${slug}`}>
                    <button className="group flex w-full items-center p-3 text-left outline-none focus:outline-none">
                      <span className="flex-1 pr-1 ">{item.name}</span>
                      <span className="mr-auto">
                        <svg
                          className="h-4 w-4 fill-current transition duration-150 ease-in-out hover:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                  <ul className="absolute right-0  top-0 w-72 origin-top-left rounded-md border bg-white shadow-border-full transition duration-150 ease-in-out">
                    {item.subcategories &&
                      Array.from(item.subcategories).map((dataTwo: any, subIndex: number) => {
                        const subSlug = dataTwo.name.replace(/\s/g, '-');
                        const combinedSlug = `${slug}/${subSlug}`;
                        return (
                          <div key={subIndex}>
                            <li className="relative rounded-sm px-4 py-3 hover:bg-gray-200">
                              <Link to={`/categories/${combinedSlug}`}>
                                <button className="flex w-full items-center text-left outline-none focus:outline-none">
                                  <span className="flex-1 pr-1">{dataTwo.name}</span>
                                  <span className="mr-auto">
                                    <svg
                                      className="h-4 w-4 fill-current transition duration-150 ease-in-out"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                  </span>
                                </button>
                              </Link>
                              <ul className="absolute right-0  top-0 w-64 origin-top-left rounded-md bg-white shadow-border-full transition duration-150 ease-in-out">
                                {dataTwo.subcategories &&
                                  Array.from(dataTwo.subcategories).map(
                                    (dataThree: any, subIndex: number) => {
                                      const subSlug = dataThree.name.replace(/\s/g, '-');
                                      const combinedSlug = `${slug}/${subSlug}`;
                                      return (
                                        <Link key={subIndex} to={`/categories/${combinedSlug}`}>
                                          <li className="px-4 py-3 hover:bg-gray-200">
                                            {dataThree.name}
                                          </li>
                                        </Link>
                                      );
                                    }
                                  )}
                              </ul>
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .w-52 { min-width: 8rem }\n',
        }}
      />
    </div>
  );
}
