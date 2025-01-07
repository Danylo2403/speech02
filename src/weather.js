export async function fetchWeather(city = 'Киев') {
  const apiKey = 'ВАШ_КЛЮЧ_API_ПОГОДЫ';  // Получите ключ API от сервиса погоды
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ошибка при получении данных о погоде');
    const data = await response.json();
    const { name, weather, main } = data;
    return {
      name,
      description: weather[0].description,
      temp: main.temp
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

// export async function fetchWeather(city = 'Киев') {
//   const apiKey = process.env.WEATHER_API_KEY; // API-ключ из .env
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`;
  
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error('Ошибка при получении данных о погоде');
//     const data = await response.json();
//     const { name, weather, main } = data;
//     return {
//       name,
//       description: weather[0].description,
//       temp: main.temp
//     };
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
