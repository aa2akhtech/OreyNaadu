const testsService = require("../services/tests");

const testFunction = async (req, res) => {
  try {
    const response = await testsService.testFunction();
    res.send(response);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { testFunction };
