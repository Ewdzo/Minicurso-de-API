import app from './app/index.js';

const port = 3000;
const server = app.listen(port);

server.on("listening", () => console.log("⚙️ API - Rodando em http://localhost:"+ port));