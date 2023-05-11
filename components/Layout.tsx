import styles from '../styles/Layout.module.css';

// TODO: 型不明なので一旦any
const Layout = ({ children }: { children: any }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
