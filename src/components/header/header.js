import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../contexts/user';
import useCurrency from '../../hooks/use-currency';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { setCurrency, currencyList, currency } = useCurrency();

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <h2>{name}</h2>
      <select
        onChange={(event) => setCurrency(event.target.value)}
        value={currency}
      >
        {currencyList.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </header>
  );
};
export default Header;
