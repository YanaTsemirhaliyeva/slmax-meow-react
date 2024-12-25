import { ProductMiniature } from "@/entities";
import styles from './page.module.scss';
import { TProduct } from "@/entities/product/model/types";


const Home = async () => {
  const products: TProduct[] = await fetch('https://api.escuelajs.co/api/v1/products?offset=12&limit=10',
    { next: { revalidate: 60 } }
  ).then(res => res.json());
  if (!products) return <>Loading</>;

  return (
    <div className={styles.page}>
      <h1>Catalog</h1>
      <ul className={styles.list}>
        {products.map((item: TProduct) => {
          return (
            <li key={item.id}>
              <ProductMiniature item={item} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default Home;
