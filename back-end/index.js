const app = require("./app");

const port = process.env.PORT || 3000;
const HOST = '192.168.10.5'; 
app.listen(port,HOST, () => console.log(`App listening on port ${port} and ${HOST}!`));
