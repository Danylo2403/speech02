import db from './db.json';
import { fetchWeather } from './weather.js';
import { fetchNews } from './news.js';
import { fetchCurrencyRate } from './currency.js';
import { addReminder } from './reminders.js';
import { tellJoke, tellFact } from './jokes.js';
import { controlSmartHome } from './smart-home.js';

export async function processInput(input) {
  const match = db.find(entry => input.includes(entry.question));
  if (!match) return 'Извините, я не знаю такой команды.';

  switch (match.action) {
    case 'greeting':
      return 'Привет! Чем могу помочь?';
    case 'name':
      return 'Меня зовут Джарвис, ваш голосовой помощник.';
    case 'weather':
      return await fetchWeather('Москва'); // Используйте распознавание города
    case 'time':
      return `Сейчас ${new Date().toLocaleTimeString('ru-RU')}.`;
    case 'reminder':
      return addReminder(input);
    case 'news':
      return await fetchNews('новости');
    case 'joke':
      return tellJoke();
    case 'fact':
      return tellFact();
    case 'currency':
      return `Курс доллара: ${await fetchCurrencyRate('USD', 'RUB')} рублей.`;
    case 'smart_home':
      return controlSmartHome(input);
    case 'timer':
      return 'Таймер функция еще в разработке.';
    case 'game':
      return 'Игра "Угадай число" началась! Попробуйте угадать.';
    default:
      return 'Извините, я не понимаю эту команду.';
  }
}
