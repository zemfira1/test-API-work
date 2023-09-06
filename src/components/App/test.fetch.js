import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

axios.defaults.params = {
  appid: '95632b02f9162f375a368971925f5209',
  units: 'metric',
};

export const getWeatherData = async coords => {
  const { data } = await axios.get('/weather', {
    params: {
      ...coords,
    },
  });
  console.log(data);
  return data;
};

export const getCityWeather = async q => {
  const { data } = await axios.get('/weather', {
    params: {
      q,
    },
  });
  console.log(data);
  return data;
};

export const getFor5Days = async coords => {
  const { data } = await axios.get('/forecast', {
    params: {
      ...coords,
    },
  });
  console.log(data);
  return data;
};
