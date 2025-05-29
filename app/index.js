const http = require('http');
const hostname = '0.0.0.0';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Kubernetes Project</title>
        <style>
          body {
            background: linear-gradient(135deg, #1e1e2f, #282a36);
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding-top: 100px;
          }
          h1 {
            font-size: 3em;
            color: #00ffcc;
            text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffff;
            animation: pulse 2s infinite;
          }
          h2 {
            color: #ff66cc;
            margin-top: 20px;
            font-size: 1.5em;
          }
          p {
            font-size: 1.2em;
            color: #f8f8f2;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        </style>
      </head>
      <body>
        <h1> Project Successfully Deployed on Kubernetes!</h1>
        <h2> This project is proudly presented by:</h2>
        <p>Khadija Bouyoussef<br>Aicha Nasih<br>Salma Hermak</p>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
