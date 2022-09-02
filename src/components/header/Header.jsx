import { useEffect, useState } from 'react'
import { getConvert } from '../../api/api'
import './styles.scss'

export const Header = ()=>{
    const [dollar, setDollar] = useState(0);
    console.log(dollar)


    useEffect(()=>{
        getConvert('1', 'USD', 'UAH' ).then((data) => setDollar(JSON.parse(data).result))
    }, [])
    return(
        <header className='header'>
            <h1 className="title">Currency Converter</h1>
            <ul>
                <li>1 USD = {dollar} UAH</li>
                <li></li>
                <li></li>
            </ul>
        </header>
    )
}