const dbConn = require("../../helpers/mongodb/dbconn");
const schema = require("../../helpers/mongodb/schemas/schema_less");

const articles = dbConn.model("article", schema, "articles");

const getArticleById = async (articleId) => {
  try {
    return new Promise(function (resolve, reject) {
      articles.find(
        {
          _id: articleId,
        },
        function (err, res) {
          if (!err) {
            resolve(res);
          } else {
            reject(err);
          }
        }
      );
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getArticles = async () => {
  try {
    return new Promise(function (resolve, reject) {
      articles.find({}, function (err, res) {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const createArticle = async (article) => {
  try {
    return new Promise(function (resolve, reject) {
      var data = {
        title: article.title,
        content: article.content,
        imageUrl: article.imageUrl,
      };
      var newArticle = new articles(data);
      newArticle.save(function (err, res) {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const deleteArticleById = async (articleId) => {
  try {
    return new Promise(function (resolve, reject) {
      articles.findOneAndRemove(
        {
          _id: articleId,
        },
        function (err, res) {
          if (!err) {
            resolve(res);
          } else {
            reject(err);
          }
        }
      );
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {
  getArticleById,
  getArticles,
  createArticle,
  deleteArticleById,
};
