
var myHeaders = new Headers();
myHeaders.append("apikey", "93VhvOzjlNBTHQhVosO4B0xh6i7Sj5Oz");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const getConvert = ( amount, from, to)=>{
    return(
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)) 
    )
 
}
