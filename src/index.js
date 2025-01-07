import { processInput } from './ai.js';
import { speak } from './utils.js';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'ru-RU';
  recognition.interimResults = false;

  const startBtn = document.getElementById('start-btn');
  const stopBtn = document.getElementById('stop-btn');
  const output = document.getElementById('output');

  startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.classList.add('listening');
    output.textContent = 'Слушаю вас...';
  });

  stopBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    speak('Озвучивание прервано.');
  });

  recognition.addEventListener('result', async (event) => {
    const speech = event.results[0][0].transcript.toLowerCase();
    output.textContent = `Вы сказали: "${speech}"`;
    startBtn.classList.remove('listening');
    const response = await processInput(speech);
    speak(response);
  });

  recognition.addEventListener('end', () => {
    startBtn.classList.remove('listening');
  });
} else {
  alert('Ваш браузер не поддерживает Web Speech API.');
}
