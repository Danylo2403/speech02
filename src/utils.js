export function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ru-RU';
  speechSynthesis.speak(utterance);
}
