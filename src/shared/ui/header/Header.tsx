import Image from 'next/image';
import styles from './Header.module.scss'
import { Title } from './Title';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title>Online shop</Title>
          <div className={styles.img}>
            <Image src='/decor/4.png' alt='Happy New Year' width={100} height={100} />
          </div>
        </div>
      </div>
    </header>
  );
}
