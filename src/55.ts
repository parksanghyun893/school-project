let myCode = `// This is an example of a simple Node.js server.
const PORT = 3000;
const Server = require('net').Server;

Server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
