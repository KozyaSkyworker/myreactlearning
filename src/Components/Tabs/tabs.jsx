import { useState } from 'react';
import './tabs.scss';

const Tabs = ({ value, onClickTab }) => {
  const tabsArray = ['Все', 'Картины', 'Вещи', 'Здания'];

  return (
    <ul className="main__tabs">
      {tabsArray.map((tab, i) => (
        <li
          className={value === i ? 'main__tab active' : 'main__tab'}
          key={i}
          onClick={() => onClickTab(i)}>
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
