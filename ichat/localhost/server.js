const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>   
  <html>   
  <head>   
      <style>    
          h1 {   
              color: black;   
              text-align: center;   
          }   
          div {   
              position: relative;   
              animation: jtp 7s infinite;   
          }   
              
          @keyframes jtp {   
              0% {   
                  top: 500px;    
                  width: 0px;  
         font-size:10px;  
         transform: translate(0px) scale(1.5) rotate(80deg);  
              }   
              25% {   
                  top: 400px;    
                  background: yellow;    
         font-size:20px;  
                  width: 50px;   
        transform: translate(100px) scale(1.4) rotate(60deg);  
              }   
              50% {   
                  top: 300px;    
                  background: orange;  
        font-size:30px;  
                  width: 150px;   
        transform: translate(200px) scale(1.3) rotate(40deg);  
              }   
              75% {   
                  top: 200px;    
                  background: pink;    
                  width: 250px;   
         font-size:40px;  
        transform: translate(300px) scale(1.2) rotate(20deg);  
              }   
              100% {   
                  top: 100px;    
                  background: red;  
         font-size:50px;  
                  width: 500px;             
         transform: translate(400px) scale(1) rotate(0deg);  
              }   
          }   
      </style>   
  </head>   
      
  <body>   
      <div>   
          <h1>Sonu Raj</h1>   
      </div>   
  </body>   
      
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});