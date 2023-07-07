import React, { ReactNode } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import Header from './components/Header';
import Aside from './components/Aside/';

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="relative flex px-10 py-5">
      <aside className="w-1/5">
        <Aside />
      </aside>
      <main className="ps-16 w-4/5">
        <Header />
        {children}
      </main>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired as Requireable<ReactNode>,
};

export default AdminLayout;
