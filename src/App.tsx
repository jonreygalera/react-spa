import React, { Suspense } from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { appRoutes } from './routes/appRoutes';
import { AppEnum } from './enums/appEnum';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
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
          <Route 
            path="*"
            element={<h1>Not FOund</h1>} 
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
