import { Container } from './App.styled';
import { Section } from 'components/Section';
import { getCityWeather, getFor5Days, getWeatherData } from './test.fetch';

export const App = () => {
  const getWeather = async () => {
    try {
      const carrentWeather = await getCityWeather('London');
      await getWeatherData({
        lat: 25,
        lon: 35,
      });
      await getFor5Days({
        lat: 25,
        lon: 35,
      });

      console.log(carrentWeather);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('finally');
    }
  };
  getWeather();

  return (
    <Container>
      <Section title="API-Test. Go to console" />
    </Container>
  );
};
