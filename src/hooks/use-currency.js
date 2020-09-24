import { useContext } from 'react';
import { CurrencyContext } from '../contexts/currency';

export default () => {
  const { currency, setCurrency, getCurrency, currencyList } = useContext(
    CurrencyContext
  );

  return {
    getCurrency,
    setCurrency,
    currency,
    currencyList,
  };
};
