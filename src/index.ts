import app from './app';

// `process.env.PORT` will be set by Heroku
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
