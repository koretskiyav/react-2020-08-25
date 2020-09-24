import React, { useContext } from 'react';
import Button from '../button';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../contexts/user';
import { currencyContext } from '../../contexts/currency';
import { USD, USDRUB, USDEUR } from '../../redux/constants';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { setCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Ivan')}>
      <Logo />
      <Button onClick={() => setCurrency({sign: '₽', exchange: USDRUB})}>₽</Button>
      <Button onClick={() => setCurrency({sign: '$', exchange: USD})}>$</Button>
      <Button onClick={() => setCurrency({sign: '€', exchange: USDEUR})}>€</Button>
      <h2>{name}</h2>
    </header>
  );
};
export default Header;
