const articlesController = require("../controllers/articles");

module.exports = (app) => {
  app.get("/articles/:articleId", articlesController.getArticleById);
  app.get("/articles", articlesController.getArticles);
  app.post("/articles", articlesController.createArticle);
  app.delete("/articles/:articleId", articlesController.deleteArticleById);
};
