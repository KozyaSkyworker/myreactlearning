import axios from 'axios';

import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import Item from '../../Components/Item/item';
import Sort from '../../Components/Sort/sort';
import Tabs from '../../Components/Tabs/tabs';
import Skeleton from '../../Components/Skeleton/skeleton';

import styles from './home.module.scss';

const Home = () => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const tabIndex = useSelector((state) => state.filter.tabIndex);
  const sort = useSelector((state) => state.filter.sort);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://630244f2c6dda4f287b6a17b.mockapi.io/products?${
          tabIndex > 0 ? `category=${tabIndex}` : ''
        }&sortBy=${sort.sortBy}&order=${sort.sortType}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((err) => alert(err));
  }, [tabIndex, sort]);

  return (
    <main className={styles.main}>
      <div className="container">
        <div className="main__inner">
          <div className={styles.main__top}>
            <Tabs value={tabIndex} />
            <Sort value={sort} />
          </div>
          <div className={styles.main__content}>
            <div className={styles.main__items}>
              {isLoading
                ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                : items.map((item) => <Item key={item.id} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
