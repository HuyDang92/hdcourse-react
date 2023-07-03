import React, { ReactNode } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import Header from '../components/Header';

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="relative">
      <header className="">ADMIN HEADER</header>
      {children}
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired as Requireable<ReactNode>,
};

export default AdminLayout;
