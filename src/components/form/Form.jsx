import { useState } from 'react';
import { getConvert } from '../../api/api';
import './styles.scss';

export const Form = () => {
  const [topSelect, setTopSelect] = useState("USD");
  const [bottomSelect, setBottomSelect] = useState("UAH");
  const [topInput, setTopInput] = useState(1);
  const [bottomInput, setBottomInput] = useState(1);

  const topCountCurrency = async (e) => {
    setTopSelect(e.target.value);
    const data = await getConvert( bottomSelect, topInput, e.target.value);
    setBottomInput(JSON.parse(data).result);
  };

  const bottomCountCurrency = async (e) => {
    setBottomSelect(e.target.value);
    const data = await getConvert(topSelect, bottomInput, e.target.value);
    setTopInput(JSON.parse(data).result);
  };

  const TopCountInput = async (e) => {
    setTopInput(e.target.value);
    const data = await getConvert(e.target.value, topSelect, bottomSelect );
    setBottomInput(JSON.parse(data).result);
  };

  const bottomCountInInput = async (e) => {
    setBottomInput(e.target.value);
    const data = await getConvert(e.target.value, bottomSelect, topSelect );
    setTopInput(JSON.parse(data).result);
  };


  return (
    <section className="converter">
      <div className="wrapper">
        <header>Currency Converter</header>
        <form action="#">
          <div className="drop-list">
            <div className="amount">
              <div className="inputs">
                <p>Enter Amount</p>
                <input className="top-input" type="text" value={topInput} onChange={TopCountInput} />
                <p>Enter Amount</p>
                <input type="text"  value={bottomInput} onChange={bottomCountInInput}/>
              </div>
            </div>
            <div>
              <div className="from">
                <p>From</p>
                <div className="select-box">
                  <select value={topSelect} onChange={topCountCurrency}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                  </select>
                </div>
              </div>
              <div className="icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="to">
                <p>To</p>
                <div className="select-box">
                  <select value={bottomSelect} onChange={bottomCountCurrency}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
