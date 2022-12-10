import { useContext } from 'react';
import { CartContext } from '../../App';
import styles from './aside.module.scss';

const Aside = ({ setIsOpen }) => {
  window.onclick = (e) => {
    if (e.target.id == 'aside') setIsOpen(false);
  };

  const { cartValue } = useContext(CartContext);

  return (
    <aside className={styles.aside} id="aside">
      <div className={styles.aside__inner}>
        <button className={styles.aside__close} onClick={() => setIsOpen(false)}>
          закрыть
        </button>
        <h2 className={styles.aside__title}>Your cart is</h2>
        <div className={styles.aside__content}>{cartValue.length}</div>
        <div className={styles.aside__controls}>
          <button className={styles.aside__btn}>купить</button>
          <button className={styles.aside__btn}>удалить все</button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
