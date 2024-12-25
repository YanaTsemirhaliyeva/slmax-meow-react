'use client'

import Link from "next/link";
import { ReactNode } from "react";
import styles from './Header.module.scss';
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => {
  const path = usePathname();

  if (path === '/') {
    return (
      <p className={styles.text}>
        {children}
      </p>
    );
  } else {
    return (
      <Link href="/" className={`${styles.text} ${styles.link}`}>
        {children}
      </Link>
    );
  }
};

