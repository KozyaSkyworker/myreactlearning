import CartItem from '../CartItem/cartitem';

import { useSelector, useDispatch } from 'react-redux';

import { clearItems } from '../../redux/slices/cartSlice';

import styles from './aside.module.scss';

const Aside = ({ setIsOpen }) => {
  window.onclick = (e) => {
    if (e.target.id == 'aside') setIsOpen(false);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const cartDispatch = useDispatch();

  return (
    <aside className={styles.aside} id="aside">
      <div className={styles.aside__inner}>
        <button className={styles.aside__close} onClick={() => setIsOpen(false)}>
          закрыть
        </button>
        <h2 className={styles.aside__title}>Your cart is</h2>
        <div className={styles.aside__content}>
          {cartItems.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))}
        </div>
        <div>
          <p className={styles.aside__total}>
            total price:
            <span>{cartItems.reduce((total, obj) => total + obj.price, 0)}</span>
          </p>
        </div>
        <div className={styles.aside__controls}>
          <button className={styles.aside__btn}>купить</button>
          <button
            className={styles.aside__btn}
            onClick={() => {
              cartDispatch(clearItems());
            }}>
            удалить все
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
