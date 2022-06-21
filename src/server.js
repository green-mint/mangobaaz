const http = require('http');
const { app } = require("./config/app");


const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})