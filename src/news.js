export async function fetchNews(keyword = 'новости') {
  const apiKey = 'ВАШ_КЛЮЧ_API_НОВОСТЕЙ'; // Получите ключ API для новостного сервиса
  const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Ошибка при получении новостей');
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// export async function fetchNews(keyword = 'новости') {
//   const apiKey = process.env.NEWS_API_KEY; // Используем ключ из .env
//   const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error('Ошибка при запросе новостей');
//     const data = await response.json();

//     // Проверяем, есть ли статьи
//     if (!data.articles || data.articles.length === 0) {
//       console.warn('Новости не найдены');
//       return [];
//     }

//     // Возвращаем только необходимые данные для каждой статьи
//     return data.articles.map(article => ({
//       title: article.title,
//       description: article.description,
//       url: article.url,
//       source: article.source.name
//     }));
//   } catch (error) {
//     console.error('Ошибка:', error);
//     return [];
//   }
// }
