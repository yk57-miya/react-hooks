import { ReactNode } from 'react';
import styles from '../styles/Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
