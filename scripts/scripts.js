//api прогноза погоды https://rapidapi.com/weatherapi/api/weatherapi-com/
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c3e04b1af1msh53411ea8b6accd1p12cab9jsnaf849555125c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const response = await fetch(url, options);
const result = await response.json();
//-----------------------------------------------//
var indicatorTime = (JSON.stringify(result.current.last_updated)).slice(12,-1); //удаление кавычек первого и последнего символа после парсинга json

const todayDate = document.querySelector('.date__time');
todayDate.insertAdjacentHTML('beforebegin',`${indicatorTime}`);

console.log((JSON.stringify(result.current.last_updated)).slice(1,-7)); //дата (ниобходимо преобразовать в нормальную дату, необходима библиотека с календарём)
console.log((JSON.stringify(result.current.last_updated)).slice(12,-1)); //время
console.log((JSON.stringify(result.location.name)).slice(1,-1)); //город
console.log((JSON.stringify(result)).slice(1,-1));
// result.current.last_updated