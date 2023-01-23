import { Outlet } from 'react-router-dom';

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default Layout;
