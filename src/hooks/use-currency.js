import { useState } from 'react';

export default (INITIAL_VALUES = { id: 'uah', sum: '28' }) => {
  const [currency, setCurrency] = useState(INITIAL_VALUES);
  const currencies = { uah: 28, rub: 77, usd: 1 };

  const setCurrencyNew = (currency) =>
    setCurrency({ id: currency, sum: currencies[currency] });

  return { setCurrencyNew, currency };
};
