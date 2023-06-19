import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from 'routes';
import DefaultLayout from 'Layout/DefaultLayout';
import NotFound from 'pages/NotFound';

import { useCurrentTabletView } from 'hooks/useCurrentViewportView';

function App(): ReactElement {
  const isTablet = useCurrentTabletView();
  const [isTabletView, setIsTabletView] = useState<boolean>(false);
  
  useEffect(() => {
    setIsTabletView(isTablet.isTablet);
  }, [isTablet]);
  
  return isTabletView ? (
    <NotFound />
  ) : (
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
