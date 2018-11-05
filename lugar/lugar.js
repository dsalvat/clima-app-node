const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8`);

    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${ dirección }`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lng: coors.lng,
        lat: coors.lat
    };
}


module.exports = {
    getLugarLatLng
}



    