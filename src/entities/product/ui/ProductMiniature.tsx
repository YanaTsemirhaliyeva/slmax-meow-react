import Link from "next/link";
import { TProduct } from "../model/types";
import styles from './styles/ProductMiniature.module.scss';
import ImageWithFallback from "./ImageWithFallback";
import { cleanUrl } from "@/shared/helpers/cleanUrl";

export const ProductMiniature = ({ item }: { item: TProduct }) => {
  const { id, title, price, images } = item;
  const src = cleanUrl(images[0]);

  return (
    <Link href={`/product/${id}`} className={styles.miniature}>
      <div className={styles.img}>
        <ImageWithFallback src={src} alt={title} />
      </div>
      <div className={styles.about}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>{price}$</span>
      </div>
    </Link>
  );
}
