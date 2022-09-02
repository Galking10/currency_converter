import './styles.scss'


export const Form = (props)=>{
    return(
        <section className='converter'>
        <div className="wrapper">
        <header>Currency Converter</header>
        <form action="#">
          <div className="drop-list">
          <div className="amount">
            <div className='inputs'>
             <p>Enter Amount</p>
            <input className='a' type="text" />
            <p>Enter Amount</p>
            <input  type="text"  />
            </div>
          </div>
          <div>
            <div className="from">
              <p>From</p>
              <div className="select-box">
                <select>  </select>
              </div>
            </div>
            <div className="icon"><i className="fas fa-exchange-alt"></i></div>
            <div className="to">
              <p>To</p>
              <div className="select-box">
                <select>  </select>
              </div>
            </div>
            </div>
          </div>
        </form>
      </div>
      </section>
    )
}