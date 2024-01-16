

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c3e04b1af1msh53411ea8b6accd1p12cab9jsnaf849555125c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.location.name); //можно выбрать только интересующую даныне (result.location.name)

} catch (error) {
        console.error(error);
}

const qwe = '123';

export default qwe;
// export {qwe};