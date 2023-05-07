import React, {lazy} from 'react'

interface RoutesInterface {
  name?: string | undefined
}

export const routes = (path: string, page: string, others : RoutesInterface = {}) => {
  const Elements = lazy(() => import(`../pages/${page}`));
  return { 
    path, 
    element: React.createElement(Elements),
    ...others
  }
}

