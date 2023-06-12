import React, { ReactNode } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired as Requireable<ReactNode>,
};

export default DefaultLayout;
