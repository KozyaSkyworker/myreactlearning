import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from './../../redux/slices/cartSlice';

import styles from './item.module.scss';

const Item = ({ id, imgURL, title, price }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const newCartItemDispatch = useDispatch();

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
              id,
              title,
              price,
            };
            newCartItemDispatch(addProduct(newProduct));
          }}>
          добавить
        </button>
      </div>
    </div>
  );
};

export default Item;
