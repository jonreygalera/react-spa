import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const BaseLayout: React.FC = () => {
  return (
    <div>
        <ul>
          <li> <Link to={'/'}>Welcome</Link></li>
          <li> <Link to={'about'}>About</Link></li>
        </ul>
      <Outlet/>
    </div>
  );
}

export default BaseLayout;
