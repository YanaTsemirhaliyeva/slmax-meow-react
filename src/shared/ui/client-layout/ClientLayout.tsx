import { Header, Snowfall } from '@/shared';
import { PropsWithChildren } from 'react';
import styles from './ClientLayout.module.scss';
import { Footer } from '@/shared';


export const ClientLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <Snowfall />
    </div>

  );
};
