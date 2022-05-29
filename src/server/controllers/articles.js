const tryDecorator = require("../middlewares/tryDecorator");
const articlesService = require("../services/articles");

const getArticleById = async (req, res) => {
  const { articleId } = req.params;
  const response = await articlesService.getArticleById(articleId);
  res.send(response);
};

const getArticles = async (req, res) => {
  const response = await articlesService.getArticles();
  res.send(response);
};

const createArticle = async (req, res) => {
  const { title, content, imageUrl } = req.body;
  const response = await articlesService.createArticle({
    title,
    content,
    imageUrl,
  });
  res.send(response);
};

const deleteArticleById = async (req, res) => {
  const { articleId } = req.params;
  const response = await articlesService.deleteArticleById(articleId);
  res.send(response);
};

module.exports = {
  getArticleById: tryDecorator(getArticleById),
  getArticles: tryDecorator(getArticles),
  createArticle: tryDecorator(createArticle),
  deleteArticleById: tryDecorator(deleteArticleById),
};
