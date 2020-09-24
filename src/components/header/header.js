import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../contexts/user';
import cn from 'classnames';

const Header = () => {
  const { setCurrencyNew, currency } = useContext(userContext);
  console.log();
  return (
    <header className={styles.header}>
      <Logo />
      <div className={cn(styles.dropdown, styles.dropbtnContainer)}>
        <button className={styles.dropbtn}>{currency.id}</button>
        <div className={styles['dropdown-content']}>
          <a onClick={() => setCurrencyNew('uah')}>uah</a>
          <a onClick={() => setCurrencyNew('rub')}>rub</a>
          <a onClick={() => setCurrencyNew('usd')}>usd</a>
        </div>
      </div>
    </header>
  );
};
export default Header;
