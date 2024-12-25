import { TProduct } from "../model/types";
import styles from "./styles/Product.module.scss";
import { SwiperComponent } from "./Swiper";

export const Product = ({ item }: { item: TProduct }) => {
  const { title, description, price, images } = item;

  return (
    <div className={styles.product}>
      <SwiperComponent images={images} title={title} />
      <div className={styles.about}>
        <span>{price}$</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
