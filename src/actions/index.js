//axios is similar to jQuery Ajax
import axios from 'axios';

const API_KEY = '59eb7923ec520baafa00470957090a5e'; 
//ES6 syntax - template strings `string1 ${string2}` $denotes template string
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//Functions have to return an object
//Return objects ALWAYS have to have a type.
export function fetchWeather(city) {
    //ES6 syntax - template strings `string1 ${string2}` $denotes template string
    //example ${blah} where blah is a dynamic string
    const url = `${ROOT_URL}&q=${city},us`;
    //Call axios.get which returns a promise (request)
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}