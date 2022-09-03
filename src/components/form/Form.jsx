import { useState } from 'react';
import { getConvert } from '../../api/api';
import './styles.scss';

export const Form = () => {
  const [topSelect, setTopSelect] = useState('USD');
  const [bottomSelect, setBottomSelect] = useState('UAH');
  const [topInput, setTopInput] = useState(1);
  const [bottomInput, setBottomInput] = useState(1);

  const topCountCurrency = async e => {
    setTopSelect(e.target.value);
    const data = await getConvert(topInput, e.target.value, bottomSelect );
    setBottomInput(JSON.parse(data).result);
  };

  const bottomCountCurrency = async e => {
    setBottomSelect(e.target.value);
    const data = await getConvert(bottomInput, topSelect,  e.target.value);
    setTopInput(JSON.parse(data).result);
  };

  const TopCountInput = async e => {
    setTopInput(e.target.value);
    const data = await getConvert(e.target.value, topSelect, bottomSelect);
    setBottomInput(JSON.parse(data).result);
  };

  const bottomCountInInput = async e => {
    setBottomInput(e.target.value);
    const data = await getConvert(e.target.value, bottomSelect, topSelect);
    setTopInput(JSON.parse(data).result);
  };

  return (
    <section>
      <div className="wrapper">
        <h2>Currency Converter</h2>
        <form>
          <div className="drop-list">
            <div className="amount">
              <div>
                <p>Enter Amount</p>
                <input type="text" value={topInput} onChange={TopCountInput} />
              </div>
              <div>
                <p>Enter Amount</p>
                <input
                  type="text"
                  value={bottomInput}
                  onChange={bottomCountInInput}
                />
              </div>
            </div>
            <div>
              <div className="from">
                <p>From</p>
                <select value={topSelect} onChange={topCountCurrency}>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="UAH">UAH</option>
                </select>
              </div>
              <div className="to">
                <p>To</p>
                <select value={bottomSelect} onChange={bottomCountCurrency}>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="UAH">UAH</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
