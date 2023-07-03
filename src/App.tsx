import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from 'routes';
import DefaultLayout from 'Layout/DefaultLayout';
import AdminLayout from 'Layout/AdminLayout';
import NotFound from 'pages/NotFound';

import { useCurrentTabletView } from 'hooks/useCurrentViewportView';

function App(): ReactElement {
  // const isTablet = useCurrentTabletView();
  // const [isTabletView, setIsTabletView] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsTabletView(isTablet.isTablet);
  // }, [isTablet]);
  return (
    // isTabletView ? (
    //   <NotFound />
    // ) : (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout: React.ComponentType<any> = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout: React.ComponentType<any> = AdminLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
