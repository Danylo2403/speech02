export async function fetchCurrencyRate(from = 'USD', to = 'RUB') {
  const apiKey = 'ВАШ_КЛЮЧ_API_КУРСОВ'; // Получите ключ API для валютных курсов
  const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ошибка при получении курса валют');
    const data = await response.json();
    return data.rates[to];
  } catch (error) {
    console.error(error);
    return null;
  }
}
