import { useContext } from 'react';
import { CurrencyContext } from '../contexts/currency';

const valueAfterFormat = {
  RUB: (value) => value,
  USD: (value) => value / 77.12,
  EUR: (value) => value / 89.99,
};

export const currencyList = Object.keys(valueAfterFormat);

export default () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const getCurrency = (value) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency,
    }).format(
      valueAfterFormat[currency] ? valueAfterFormat[currency](value) : value
    );
  };

  return {
    getCurrency,
    setCurrency,
    currency,
    currencyList,
  };
};
