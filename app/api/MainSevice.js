module.exports = MainSevice;

function MainSevice(app) {
  //建築列表
  app.get("/fb/user_param", function(req, res) {
    console.log("/fb/user_param");
    var url = require("url");
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log("url",url);
    console.log("url_parts",url_parts);
    console.log("query",query);
    res.status(200).send("");
  });

  app.post("/fb/event", function(req, res) {
    console.log("/fb/event", req.body);
    var url = require("url");
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log("url",url);
    console.log("url_parts",url_parts);
    console.log("query",query);
    console.log("body", req.body);
    res.status(200).send("");
  });
}
