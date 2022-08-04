import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import NavMobile from '../NavMobile/NavMobile';
import './Layout.scss';

const Layout = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const screenWidthHandler = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', screenWidthHandler);
    return () => window.removeEventListener('resize', screenWidthHandler);
  }, []);

  return (
    <div className="layout">
      {screenWidth < 992 ? <NavMobile /> : <Sidebar />}
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
