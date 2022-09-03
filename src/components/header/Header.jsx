import { useEffect, useState } from 'react';
import { getConvert } from '../../api/api';
import './styles.scss';

export const Header = () => {
  const [dollar, setDollar] = useState(0);
  const [euro, setEuro] = useState(0);

//   useEffect(() => {
//     getConvert('1', 'USD', 'UAH').then(data =>
//       setDollar(JSON.parse(data).result),
//     );
//     getConvert('1', 'EUR', 'UAH').then(data =>
//       setEuro(JSON.parse(data).result),
//     );
//   }, []);
  return (
    <header >
        <div className='header-container'>
      <h1 className="title">Exchange Rate</h1>
      <ul className='rate'>
        <li>1 USD = {dollar.toFixed(2)} UAH</li>
        <li>1 EUR = {euro.toFixed(2)} UAH</li>
      </ul>
      </div>
    </header>
  );
};
