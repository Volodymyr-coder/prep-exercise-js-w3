const express = require('express');
const path = require('path');
const app = express();

// Указываем директорию для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Роут для корневого пути
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
