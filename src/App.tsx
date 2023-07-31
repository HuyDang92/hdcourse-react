import { useRoutes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from 'routes';
import NotFound from 'pages/NotFound';

const App = () => {
  const routing = useRoutes([
    ...publicRoutes.map((route, index) => ({
      path: route.path,
      element:
        route.layout === null ? (
          <route.component />
        ) : (
          <route.layout>
            <route.component />
          </route.layout>
        ),
    })),
    ...privateRoutes.map((route, index) => ({
      path: route.path,
      element:
        route.layout === null ? (
          <route.component />
        ) : (
          <route.layout>
            <route.component />
          </route.layout>
        ),
    })),
    { path: '*', element: <NotFound /> },
  ]);

  return <div className="App">{routing}</div>;
};

export default App;
