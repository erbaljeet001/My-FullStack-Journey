import { log } from 'console';
import http from 'http'

const server =http.createServer((req, res) => {
  req.writeHead(200, { "content-Type": "text/plain" });
  req.end("Server has send you a  msg");
});

server.listen(8000, () => {
   console.log(" Server run at port : 8000");
    
});