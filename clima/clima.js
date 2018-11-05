const axios = require('axios');

const getClima = async (lat, lng) => {
    
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=52f1df323d25a90f4a9379f1f351ca46`);
    //axios

    return resp.data.main.temp;



}

module.exports = {
    getClima
}