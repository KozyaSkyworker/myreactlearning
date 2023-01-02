import { useState } from 'react';
import './sort.scss';

import { useDispatch } from 'react-redux';
import { setSort } from './../../redux/slices/filterSlice';

const Sort = ({ value }) => {
  const dispatchSort = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const sortObjects = [
    {
      name: 'сначала дешёвые',
      sortBy: 'price',
      sortType: 'asc',
    },
    {
      name: 'сначала дорогие',
      sortBy: 'price',
      sortType: 'desc',
    },
    {
      name: 'по алфавиту А-Я',
      sortBy: 'title',
      sortType: 'asc',
    },
    {
      name: 'по алфавиту Я-А',
      sortBy: 'title',
      sortType: 'desc',
    },
  ];

  const selectedSort = value.name;

  return (
    <div className="sort">
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
