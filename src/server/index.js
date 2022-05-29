const Express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const testsController = require("./controllers/tests");
const initArticlesRoutes = require("./routes/articles");

const app = new Express();
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(Express.static(path.join(__dirname, "../../dist")));
app.use(Express.static(path.join(__dirname, "../../src/assets/static")));

const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname + "../../dist/index.html"));
};

app.get("/", renderHome);

app.get("/api/test", testsController.testFunction);
initArticlesRoutes(app);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
    );
  }
});
