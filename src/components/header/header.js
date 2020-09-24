import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../contexts/user';
import { currencyContext } from '../../contexts/currency';

const CURRENCY_LIST = {
  USD: {
    value: 1,
    name: 'USD',
    charCode: '$',
  },
  EUR: {
    value: 0.858,
    name: 'EUR',
    charCode: '€',
  },
  UAN: {
    value: 28.24,
    name: 'UAN',
    charCode: '₴',
  },
};

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currency, setCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <h2>{name}</h2>
      <ul>
        {Object.keys(CURRENCY_LIST).map((cur, index) => (
          <li key={index}>
            <a
              className={cur === currency.name ? styles.active : ''}
              onClick={() => setCurrency(CURRENCY_LIST[cur])}
            >
              {cur}{' '}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
