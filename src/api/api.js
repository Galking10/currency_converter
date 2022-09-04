
var myHeaders = new Headers();
myHeaders.append("apikey", "ZfnjNtwSkLCxq3ggH4dIqkXEDsyrRLiq");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getConvert = ( amount, from, to)=>{
    return(
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => console.log('error', error)) 
    )
 
}
