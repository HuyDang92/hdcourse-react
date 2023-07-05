import React, { ReactNode } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import Header from './components/Header';
import Aside from './components/Aside/';

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="relative flex py-5 px-10">
      <Aside />
      <main className="bg-slate-700">
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
