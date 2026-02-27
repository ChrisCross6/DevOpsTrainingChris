const http = require('http');
const server = http.createServer((req, res) => {
    res.write("Hello. My name is Chris. This is my DevOps Starter Project!");
    res.end();
});
server.listen(3000);