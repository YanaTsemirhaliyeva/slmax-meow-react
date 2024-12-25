import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>&#127794;&nbsp;
            <span className={styles.colored}>Merry Christmas & Happy New Year, SLMax! Best wishes</span>
            &nbsp;&#128516;
          </p>
          <p>&copy; Yana Temirgalieva</p>
        </div>
      </div>
    </footer>
  );
}
