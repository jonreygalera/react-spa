import React, { Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { appRoutes } from './routes/appRoutes';
import { AppEnum } from './enums/appEnum';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const BaseLayout = lazy(() => import('./components/layouts/BaseLayout'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route element={<BaseLayout/>}>
            {
            appRoutes?.map((page, pageIndex) => {
              return (
                <Route 
                  key={`${page?.name ?? 'page'}-${pageIndex}`}
                  path={page.path}
                  element={page.element}
                />
              )
            })
            }
          </Route>
          <Route 
            path="*"
            element={<NotFoundPage />} 
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
