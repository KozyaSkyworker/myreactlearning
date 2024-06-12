import { useEffect, useRef, useState } from 'react';
import './sort.scss';

import { useDispatch } from 'react-redux';
import { setSort } from './../../redux/slices/filterSlice';

export const sortObjects = [
  {
    name: 'сначала дешёвые',
    sortBy: 'price',
    sortType: 'asc',
  },
  {
    name: 'сначала дорогие',
    sortBy: '-price',
    sortType: 'desc',
  },
  {
    name: 'по алфавиту А-Я',
    sortBy: 'title',
    sortType: 'asc',
  },
  {
    name: 'по алфавиту Я-А',
    sortBy: '-title',
    sortType: 'desc',
  },
];

const Sort = ({ value }) => {
  const sortItem = useRef();

  const dispatchSort = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const selectedSort = value.name;

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.path.includes(sortItem.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="sort" ref={sortItem}>
      <span className="sort__title">Сортировка: </span>
      <span
        className="sort__type"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        {selectedSort}
      </span>
      {isOpen && (
        <ul className="sort__list" id="list">
          {sortObjects.map((obj, i) => (
            <li
              className={value.name === obj.name ? 'sort__item active' : 'sort__item'}
              key={i}
              onClick={() => {
                dispatchSort(setSort(obj));
                setIsOpen(!isOpen);
              }}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
