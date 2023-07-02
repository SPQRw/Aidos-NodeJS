import http from "http";
import url from "url";
import fs from "fs";

// function worker(request, response) {
//   console.log("METHOD", request.method);

//   let ccurrentUrl = url.parse(request.url);
//   let params = new URLSearchParams(ccurrentUrl.search);
//   let data;
//   switch (ccurrentUrl.pathname) {
//     case "/register":
//       if (request.method === "GET") {
//         fs.readFile("./register.html", "utf8", function (err, data) {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.write(data);
//           res.end();
//         });
//       } else if (request.url === "/users") {
//         if (ccurrentUrl && checkUser(ccurrentUrl)) {
//           data = fs.readFileSync("./users.html", "utf-8");
//           data = data.replace("%name%", name);
//           response.statusCode = 200;
//           response.setHeader("Content-Type", "text/html");
//           response.write(data);
//         } else {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           res.end("User not found");
//         }
//       }
//       break;

//     case "/users":
//       let name = params.get("name");
//       console.log(name);
//       if (name) {
//         data = fs.readFileSync("./users.html", "utf-8");
//         data = data.replace("%name%", name);
//         response.statusCode = 200;
//         response.setHeader("Content-Type", "text/html");
//         response.write(data);
//       } else {
//         response.statusCode = 403;
//         response.statusMessage = "wrong request name";
//       }
//       break;

//     case "/feedback":
//       data = fs.readFileSync("./feedback.html", "utf-8");
//       response.statusCode = 200;
//       response.write(data);
//       break;
//     case "/":
//       data = fs.readFileSync("./html.html", "utf-8");
//       response.statusCode = 200;
//       response.write(data);
//       break;
//     case "/favicon.ico":
//       break;
//     case "//":
//       break;
//     default:
//       response.statusCode = 404;
//       response.statusMessage = "Page undefined";
//   }
//   response.end();
// }

function worker(request, response) {
  console.log("METHOD", request.method);

  let ccurrentUrl = url.parse(request.url);
  // let params = new URLSearchParams(ccurrentUrl.search);
  // get
  if (request.method === "GET") {
    switch (ccurrentUrl.pathname) {
      case "/":
        fs.readFile("html.html", "utf8", function (err, data) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        });
        break;
      case "/register":
        fs.readFile("register.html", "utf8", function (err, data) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        });
        break;
      case "/users":
        const urlObject = new URL(
          `http://${request.headers.host}${request.url}`
        );
        const nameParam = urlObject.searchParams.get("name");
        console.log("Imya polz v linke=", nameParam);
        if (nameParam) {
          let data = fs.readFileSync("./users.json", "utf-8");
          let users = JSON.parse(data);
          console.log("imya polz v json=", users);
          let take = users.find((o) => o.username === nameParam);
          //console.log("sravnenie=", take.username);
          if (take?.username === nameParam) {
            let page = fs.readFileSync("./users.html", "utf8");
            page = page.replace("%name%", nameParam);
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(page);
          } else {
            response.writeHead(404);
            response.end("User not found");
          }
          // }
        } else {
          response.writeHead(400);
          response.end("Missing name parameter");
        }
        break;
    }
  }
  // post
  if (request.method === "POST") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const params = new URLSearchParams(body);
      let newUser = {
        username: params.get("username"),
        email: params.get("email"),
        password: params.get("password"),
      };

      let data = fs.readFileSync("./users.json");
      let myObject = JSON.parse(data);

      myObject.push(newUser);

      let newData2 = JSON.stringify(myObject, null, 2);
      fs.writeFile("./users.json", newData2, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added");
      });

      // Отправка HTML-кода с редиректом
      const redirectUrl = `/users?name=${newUser.username}`;
      response.writeHead(301, {
        Location: redirectUrl,
      });
      response.end();
    });
  }
}

const server = http.createServer(worker);

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
