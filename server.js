const app = require('./app');

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend chạy tại http://localhost:${PORT}`);
});