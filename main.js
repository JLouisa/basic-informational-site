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

  //! Content-type of the file
  const contentType = "text/html";

  //! Dynamic content-type setup
  switch (extName) {
    case ".js": {
      contentType = "text/html";
      break;
    }
    case ".css": {
      contentType = "text/css";
      break;
    }
    case ".json": {
      contentType = "application/json";
      break;
    }
    case ".png": {
      contentType = "image/png";
      break;
    }
    case ".jpg": {
      contentType = "image/jpg";
      break;
    }
  }

  const data = await fs.readFile(thePath, "utf8").catch((error) => {
    console.error("An error occurred:", error);
    res.writeHead(500, { "Content-Type": contentType });
    res.end("<h1>Internal Server Error</h1>");
  });
  if (data) {
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  }
});

const PORT = process.env.PORT || 5137;
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
