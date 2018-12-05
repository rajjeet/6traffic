var axios = require('axios');

const API_URL = 'http://35.231.129.73:8080/weather';


axios.get(API_URL).then(d => console.log(d));