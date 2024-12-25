'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './styles/ProductMiniature.module.scss';


type ImageWithFallbackProps = {
  src: string;
  alt: string;
};

const ImageWithFallback = ({ src, alt }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const randomInt = Math.floor(Math.random() * 12) + 1;
  const fallbackSrc = `/images/${randomInt}.jpg`;

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <Image className={styles.img} src={imgSrc} alt={alt} width={400} height={400} onError={handleError} />;
};

export default ImageWithFallback;
