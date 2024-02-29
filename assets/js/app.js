import { get, post } from './request.js';
import { _renderUI, _getWeatherUI } from './ui.js';

const weather = function () {
    // Variables
    const weatherCards = document.querySelector('.js-weather-cards');
    const cardCities = document.querySelector('.js-cities');
    const input = document.querySelector('.js-search-input');
    const form = document.querySelector('.js-form');
    const cities = ["Adana","Ankara","İstanbul","izmir","Samsun","Sinop","Eskisehir","Gaziantep","Elazığ","Bursa","Balıkesir","Antalya"]

    const requestBody = {
        "locations": cities.map(city => ({
            "q": city   
        }))
    }
    

    // EventListeners
    const _eventListeners = function () {
        form.addEventListener('submit', _handleSubmit);

    }

    // Function

    const requestPost = function () {
        const url = "https://api.weatherapi.com/v1/current.json";
        const key = "42552535cb534f0bb1e115745242702";
        post(`${url}?key=${key}&q=bulk`, requestBody).then((datas) => {
            const cardDatas = datas.bulk;
            _renderUI(cardCities, cardDatas);
        });
    }

    const _handleSubmit = function (e) {
        e.preventDefault();
        const city = input.value
        const path = "https://api.weatherapi.com/v1/current.json?key=42552535cb534f0bb1e115745242702&q=" + city ;
        _getRequest(path);
        input.value = '';
    }

    const _getRequest = function (path) {
        get(path).then((datas) => {
            _getWeatherUI(weatherCards, datas);
        });
    }

    return {
        init: function() {
            _eventListeners();
            requestPost()
        }
    }
}();

document.addEventListener('DOMContentLoaded',function(){
    weather.init();
});