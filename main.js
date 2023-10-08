const http = require("http");
const path = require("path");
const fs = require("fs/promises");
const dotenv = require("dotenv").config();

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  //   if (req.url === "/") {
  //     const thePath = path.join(__dirname, "public", "index.html");

  //     const data = await fs.readFile(thePath, "utf8").catch((error) => {
  //       console.error("An error occurred:", error);
  //       res.writeHead(500, { "Content-Type": "text/html" });
  //       res.end("<h1>Internal Server Error</h1>");
  //     });

  //     if (data) {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(data);
  //     }
  //   }

  //! Dynamic path
  const thePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

  //! Extention of the file
  const extName = path.extname(thePath);
  console.log(extName);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
