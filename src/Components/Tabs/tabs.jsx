import { useState } from 'react';
import './tabs.scss';

import { useDispatch } from 'react-redux';
import { setTabIndex } from './../../redux/slices/filterSlice';

const Tabs = ({ value }) => {
  const dispatchTab = useDispatch();

  const tabsArray = ['Все', 'Картины', 'Вещи', 'Здания'];

  return (
    <ul className="main__tabs">
      {tabsArray.map((tab, i) => (
        <li
          className={value == i ? 'main__tab active' : 'main__tab'}
          key={i}
          onClick={() => dispatchTab(setTabIndex(i))}>
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
