const datasource = require("./datasource");

const getArticleById = async (articleId) => {
  return datasource.getArticleById(articleId);
};

const getArticles = async () => {
  return datasource.getArticles();
};

const createArticle = async (data) => {
  return datasource.createArticle(data);
};

const deleteArticleById = async (articleId) => {
  return datasource.deleteArticleById(articleId);
};

module.exports = {
  getArticleById,
  getArticles,
  createArticle,
  deleteArticleById,
};
