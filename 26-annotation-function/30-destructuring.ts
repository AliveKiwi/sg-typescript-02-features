const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forcecast: { date: Date; weather: string }): void => {
  console.log(forcecast.date);
  console.log(forcecast.weather);
};

logWeather(todaysWeather);

// Destructuring the object in the function parameter
const logWeatherDestructured = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
