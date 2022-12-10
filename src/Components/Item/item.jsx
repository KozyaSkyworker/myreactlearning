import { useContext } from 'react';
import { CartContext } from '../../App';
import styles from './item.module.scss';

const Item = ({ id, imgURL, title, price }) => {
  const { cartValue, setCartValue } = useContext(CartContext);

  return (
    <div className={styles.main__item}>
      <img className={styles.main__img} src={imgURL} alt="image" title="to full product page" />
      <div className={styles.main__bottom}>
        <div className={styles.main__box}>
          <h3 className={styles.main__title}>{title}</h3>
          <p className={styles.main__price}>{price}</p>
        </div>
        <button
          className={styles.main__btn}
          onClick={() => {
            const newProduct = {
              id: { id },
              title: { title },
              price: { price },
            };
            setCartValue([newProduct, ...cartValue]);
          }}>
          добавить
        </button>
      </div>
    </div>
  );
};

export default Item;
