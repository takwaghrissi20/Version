
const next = require("next");
// note the "https" not "http" required module. You will get an error if trying to connect with https
const https = require("https");
const http = require("http");
const { parse } = require("url");
const fs = require("fs");
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const hostname = dev ? "localhost" : "https://dev-gateway.gets-company.com";
const app = next({ dev, hostname, port });
const sslOptions = {
  key: fs.readFileSync("/etc/apache2/ssl/server.key"),
  //cert: fs.readFileSync(""),
};
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = https.createServer(sslOptions, (req, res) => {
    // custom api middleware
    if (req.url.startsWith("/api/v1/")) {
      return handle(req, res);
    } else {
      // Handle Next.js routes
      return handle(req, res);
    }
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log("> Ready on https://localhost:" + port);
  });
});
