import { useEffect, useState } from 'react';
import { useFetchCategoriesQuery } from 'features/Home/home.service';
import IonIcon from '@reacticons/ionicons';

export default function Dropdown() {
  const { data, isFetching } = useFetchCategoriesQuery(undefined);

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
        <ul className="absolute top-[110%] w-56 origin-top scale-0 transform space-y-1 rounded-sm border bg-white p-2 text-sm transition duration-150 ease-in-out group-hover:scale-100">
          {!isFetching &&
            data?.map((item, index) => {
              return (
                // <li className="rounded-sm px-4 py-2 hover:bg-gray-200" key={item.id}>
                //   {item.name}
                // </li>
                <li key={index} className="relative rounded-sm px-2 py-2 hover:bg-gray-200">
                  <button className="flex w-full items-center text-left outline-none focus:outline-none">
                    <span className="flex-1 pr-1 ">{item.name}</span>
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
                  <ul className="absolute right-0 top-0 w-52 origin-top-left rounded-sm border bg-white transition duration-150 ease-in-out ">
                    {item.submenu.map((data: any, index: any) => {
                      return (
                        <li key={index} className="px-4 py-2 hover:bg-gray-200">
                          {data}
                        </li>
                      );
                    })}
                    {/* <li className="relative rounded-sm px-4 py-2 hover:bg-gray-200">
                      <button className="flex w-full items-center text-left outline-none focus:outline-none">
                        <span className="flex-1 pr-1">Python</span>
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
                      <ul className="absolute right-0 top-0 w-52 origin-top-left rounded-sm border bg-white transition duration-150 ease-in-out">
                        <li className="px-4 py-2 hover:bg-gray-200">2.7</li>
                        <li className="px-4 py-2 hover:bg-gray-200">3+</li>
                      </ul>
                    </li> */}
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

    // <Menu as="div" className="relative inline-block w-full text-left">
    //   <div>
    //     <Menu.Button
    //       onClick={() => setChecked(!checked)}
    //       className="flex w-full justify-between gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-darkLight shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    //     >
    //       Chủ đề
    //       <ChevronDownIcon
    //         className={`-mr-1 h-5 w-5 text-org transition-all ${checked ? '-rotate-180' : ''}`}
    //         aria-hidden="true"
    //       />
    //     </Menu.Button>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //   >
    //     <Menu.Items
    //       onClick={() => setChecked(!checked)}
    //       className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    //     >
    //       <div className="py-1">
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Edit
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Duplicate
    //             </a>
    //           )}
    //         </Menu.Item>
    //       </div>
    //       <div className="py-1">
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Archive
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Move
    //             </a>
    //           )}
    //         </Menu.Item>
    //       </div>
    //       <div className="py-1">
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Share
    //             </a>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Add to favorites
    //             </a>
    //           )}
    //         </Menu.Item>
    //       </div>
    //       <div className="py-1">
    //         <Menu.Item>
    //           {({ active }) => (
    //             <a
    //               href="#"
    //               className={classNames(
    //                 active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
    //                 'block px-4 py-2 text-sm'
    //               )}
    //             >
    //               Delete
    //             </a>
    //           )}
    //         </Menu.Item>
    //       </div>
    //     </Menu.Items>
    //   </Transition>
    // </Menu>
  );
}
