import axios from 'axios';

import qs from 'qs';
import { useNavigate, Link } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setFilters } from '../../redux/slices/filterSlice';

import { sortObjects } from '../../Components/Sort/sort';

import Item from '../../Components/Item/item';
import Sort from '../../Components/Sort/sort';
import Tabs from '../../Components/Tabs/tabs';
import Skeleton from '../../Components/Skeleton/skeleton';

import styles from './home.module.scss';

const Home = () => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const isFiltersSet = useRef(false);
  const isMounted = useRef(false);

  const tabIndex = useSelector((state) => state.filter.tabIndex);
  const sort = useSelector((state) => state.filter.sort);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const requestItems = () => {
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
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const selectedSort = sortObjects.find((obj) => obj.sortBy === params.sortBy);
      dispatch(setFilters({ ...params, selectedSort }));
      isFiltersSet.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        tabIndex,
        sortBy: sort.sortBy,
        sortType: sort.sortType,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [tabIndex, sort]);

  useEffect(() => {
    if (!isFiltersSet.current) {
      requestItems();
    }

    isFiltersSet.current = false;
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
                : items.map((item) => (
                    <Link to={`/myreactlearning/product/${item.id}`} key={item.id}>
                      <Item {...item} />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
