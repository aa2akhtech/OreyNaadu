const tryDecorator = (controllerFunction) => async (req, res, next) => {
  try {
    await controllerFunction(req, res, next);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = tryDecorator;
