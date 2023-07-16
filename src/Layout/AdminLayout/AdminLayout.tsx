import { ReactNode, useEffect, useState } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import Header from './components/Header';
import Aside from './components/Aside/';
import { useSelector } from 'react-redux';
import { RootState } from 'stores/store';
import NotFound from 'pages/NotFound';

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  const currentUserAdmin = useSelector((state: RootState) => state.auth.currentUser);
  const [role, setRole] = useState<boolean>(false);

  useEffect(() => {
    if (currentUserAdmin) {
      if (currentUserAdmin.role === 'admin') {
        setRole(true);
      }
    } else {
      setRole(false);
    }
  }, []);

  return role ? ( // Di chuyển mở ngoặc đến đây
    <div className="relative flex px-10 py-5">
      <aside className="w-1/5">
        <Aside />
      </aside>
      <main className="w-4/5 ps-16">
        <Header />
        {children}
      </main>
    </div>
  ) : (
    <NotFound />
  ); // Đóng ngoặc đúng sau NotFound
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired as Requireable<ReactNode>,
};

export default AdminLayout;
